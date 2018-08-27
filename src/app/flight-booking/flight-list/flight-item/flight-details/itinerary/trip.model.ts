export class Trip {
  public depart: { departFrom: string, departFromCode: string, fromAirport: string, fromTerminal: string, departTime: number, departFromZone: string };
  public arrive: { arriveAt: string, arriveAtCode: string, atAirport: string, atTerminal: string, arrivalTime: number, arriveAtZone: string };
  public operator: { carrier: string, name: string, airCraft: string, class: string, fareType: string };
}
