export class TipService {
  private cost = 0;
  private qualityPercent = 0.18;
  private roundUp = false;
  private tipAmount = 0;
  private totalAmount = 0;
  private name = '';
  private serviceType = '';
  private date: Date | null = null;
  private notes = '';

  setData(data: {
    name: string;
    cost: number;
    serviceType: string;
    qualityPercent: number;
    roundUp: boolean;
    notes: string;
    date: Date | null;
  }) {
    this.cost = data.cost;
    this.qualityPercent = data.qualityPercent;
    this.roundUp = data.roundUp;
    this.name = data.name;
    this.serviceType = data.serviceType;
    this.date = data.date;
    this.notes = data.notes;
    this.calculateTip();
  }

  private calculateTip() {
    let tip = this.cost * this.qualityPercent;
    if (this.roundUp) {
      tip = Math.ceil(tip);
    }
    this.tipAmount = tip;
    this.totalAmount = this.cost + tip;
  }

  getTipAmount() {
    return this.tipAmount;
  }

  getTotalAmount() {
    return this.totalAmount;
  }

  getInputData() {
    return {
      name: this.name,
      cost: this.cost,
      qualityPercent: this.qualityPercent,
      roundUp: this.roundUp,
      serviceType: this.serviceType,
      date: this.date,
      notes: this.notes,
    };
  }
}

export const tipService = new TipService();
