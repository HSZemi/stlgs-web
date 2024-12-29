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
      for (let i = 0; i <= numberOfSeats; i++) {
        row.values.push(row.totalVotes / divisor)
        divisor += 1
      }
    }
    resultTable.push(row)
  }
  return resultTable
}

export const stlgsSeats = (table: ResultTableRow[], numberOfSeats: number): StlgsListResult[] => {
  const listResults: StlgsListResult[] = []
  const allValues = table.flatMap((row: ResultTableRow) => row.values).sort((a, b) => b - a)
  const lastPickedValue = allValues[numberOfSeats - 1]
  for (const row of table) {
    if (row.totalVotes === undefined) {
      listResults.push({...row, seats: undefined})
      continue;
    }
    for (let seats = 0; seats <= numberOfSeats; seats += 1) {
      if (row.values[seats] < lastPickedValue) {
        listResults.push({...row, seats: seats})
        break;
      }
    }
  }
  return listResults
}

export const stlgsSeatDistribution = (listResults: StlgsListResult[]): StlgsFullResult[] => {
  const fullResults: StlgsFullResult[] = []
  for (const listResult of listResults) {
    let listSeats: number | undefined = 0
    let peopleSeats: number | undefined = 0
    let needsLot = false
    let seatsDetails: StlgsListResult[] = []
    if (listResult.seats === undefined) {
      listSeats = undefined;
      peopleSeats = undefined;
    } else if (listResult.seats > 0) {
      const fakeLists: ListDataWithTotalVotes[] = [
        {name: 'Personenstimmen', listVotes: 0, peopleVotes: listResult.peopleVotes, totalVotes: listResult.peopleVotes},
        {name: 'Listenstimmen', listVotes: listResult.listVotes, peopleVotes: 0, totalVotes: listResult.listVotes},
      ]
      const table = stlgsTable(fakeLists, listResult.seats || 0)
      seatsDetails = stlgsSeats(table, listResult.seats || 0)
      peopleSeats = seatsDetails[0].seats;
      listSeats = seatsDetails[1].seats;
      if(listSeats !== undefined && peopleSeats !== undefined && listSeats + peopleSeats !== listResult.seats){
        needsLot = true
      }
    }
    fullResults.push({...listResult, listSeats, peopleSeats, needsLot, seatsDetails})
  }
  return fullResults
}

