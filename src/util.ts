import type {ListData, ListDataWithTotalVotes, ResultTableRow, StlgsFullResult, StlgsListResult} from "@/interfaces.ts";

export const totalVotes = (value: ListData) => {
  if (value.listVotes !== undefined && value.peopleVotes !== undefined) {
    return value.listVotes + value.peopleVotes;
  }
  return undefined;
}

export const addTotalVotes = (value: ListData[]): ListDataWithTotalVotes[] => value.map(v => ({
  ...v,
  totalVotes: totalVotes(v)
}))

export const stlgsTable = (lists: ListDataWithTotalVotes[], numberOfSeats: number): ResultTableRow[] => {
  if (numberOfSeats < 0) {
    numberOfSeats = 0
  }
  const resultTable: ResultTableRow[] = []
  for (const list of lists) {
    const row: ResultTableRow = {...list, values: []}
    if (row.totalVotes !== undefined) {
      let divisor = 0.5
      for (let i = 0; i <= numberOfSeats * 2 + 1; i++) {
        row.values.push(row.totalVotes / divisor)
        divisor += 1
      }
    }
    resultTable.push(row)
  }
  return resultTable
}

export const stlgsSeats = (table: ResultTableRow[], numberOfSeats: number, numberOfDeputySeats: number | undefined): StlgsListResult[] => {
  const listResults: StlgsListResult[] = []
  const allValues = table.flatMap((row: ResultTableRow) => row.values).sort((a, b) => b - a)
  const lastPickedValue = allValues[numberOfSeats - 1]
  const totalSeats = numberOfSeats + (numberOfDeputySeats || 0)
  const lastPickedDeputyValue = allValues[totalSeats - 1]
  for (const row of table) {
    if (row.totalVotes === undefined) {
      listResults.push({...row, seats: undefined, deputySeats: undefined})
      continue;
    }
    let assignedSeats = 0
    let assignedDeputySeats = 0
    for (let seats = 0; seats <= numberOfSeats; seats += 1) {
      if (row.values[seats] < lastPickedValue) {
        assignedSeats = seats
        break;
      }
    }
    if (numberOfDeputySeats === undefined) {
      assignedDeputySeats = assignedSeats === 0 ? 0 : Math.max(2, Math.ceil(assignedSeats / 2))
    } else {
      for (let seats = 0; seats <= totalSeats; seats += 1) {
        if (row.values[seats] < lastPickedDeputyValue) {
          assignedDeputySeats = seats - assignedSeats
          break;
        }
      }
    }
    listResults.push({...row, seats: assignedSeats, deputySeats: assignedDeputySeats})
  }
  return listResults
}

const doesNeedLot = (listResult: StlgsListResult, listSeats: number | undefined, peopleSeats: number | undefined,
                     listDeputySeats: number | undefined, peopleDeputySeats: number | undefined) => {
  if (listSeats !== undefined && peopleSeats !== undefined) {
    if (listSeats + peopleSeats !== listResult.seats) {
      console.log(listResult.name, listSeats, peopleSeats, listResult.seats)
      return true
    }
  }
  if (peopleDeputySeats !== undefined && listDeputySeats !== undefined) {
    if (peopleDeputySeats + listDeputySeats !== listResult.deputySeats) {
      console.log(listResult.name, peopleDeputySeats, listDeputySeats, listResult.deputySeats)
      return true
    }
  }
  return false
}

export const stlgsSeatDistribution = (listResults: StlgsListResult[]): StlgsFullResult[] => {
  const fullResults: StlgsFullResult[] = []
  for (const listResult of listResults) {
    let listSeats: number | undefined = 0
    let peopleSeats: number | undefined = 0
    let deputyListSeats: number | undefined = 0
    let deputyPeopleSeats: number | undefined = 0
    let needsLot = false
    let seatsDetails: StlgsListResult[] = []
    if (listResult.seats === undefined) {
      listSeats = undefined;
      peopleSeats = undefined;
      deputyListSeats = undefined;
      deputyPeopleSeats = undefined;
    } else if (listResult.seats > 0) {
      const fakeLists: ListDataWithTotalVotes[] = [
        {name: 'Personenstimmen', listVotes: 0, peopleVotes: listResult.peopleVotes, totalVotes: listResult.peopleVotes},
        {name: 'Listenstimmen', listVotes: listResult.listVotes, peopleVotes: 0, totalVotes: listResult.listVotes},
      ]
      const table = stlgsTable(fakeLists, listResult.seats || 0)
      seatsDetails = stlgsSeats(table, listResult.seats || 0, listResult.deputySeats || 0)
      peopleSeats = seatsDetails[0].seats;
      listSeats = seatsDetails[1].seats;
      deputyPeopleSeats = seatsDetails[0].deputySeats;
      deputyListSeats = seatsDetails[1].deputySeats;
      needsLot = doesNeedLot(listResult, listSeats, peopleSeats, deputyListSeats, deputyPeopleSeats)
    }
    fullResults.push({
      ...listResult,
      listSeats,
      peopleSeats,
      deputyListSeats,
      deputyPeopleSeats,
      needsLot,
      seatsDetails
    })
  }
  return fullResults
}

