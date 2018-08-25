export class Trip {
  public depart: { departFrom: string, departFromCode: string, fromAirport: string, fromTerminal: string, departTime: number };
  public arrive: { arriveAt: string, arriveAtCode: string, atAirport: string, atTerminal: string, arrivalTime: number };
  public operator: { carrier: string, name: string, airCraft: string, class: string, fareType: string };
}
