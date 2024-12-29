export interface ListData {
  name: string
  listVotes: number | undefined
  peopleVotes: number | undefined
}

export interface ListDataWithTotalVotes extends ListData {
  totalVotes: number | undefined
}

export interface ResultTableRow extends ListDataWithTotalVotes {
  values: number[]
}

export interface StlgsListResult extends ResultTableRow {
  seats: number | undefined
}

export interface StlgsFullResult extends StlgsListResult {
  listSeats: number | undefined
  peopleSeats: number | undefined
  needsLot: boolean
  seatsDetails: StlgsListResult[]
}
