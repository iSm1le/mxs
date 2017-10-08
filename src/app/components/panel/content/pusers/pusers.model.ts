export class User {
  public username: string;
  public email: string;
  public password: string;
  public services: string;
  public created: Date;
  public _id: string;

  constructor(username: string, email: string, password: string, services: string, created: Date, _id?: string) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.services = services;
    this.created = created;
    this._id = _id;
  }
}
