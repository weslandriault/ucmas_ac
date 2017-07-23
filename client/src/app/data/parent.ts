export class Parent {
  public fullName: string = ''
  public phoneNumber: string = '' 
  public email: string = ''
  public role: string = ''

  public constructor(parentObj?:Partial<Parent>) {
    Object.assign(this, parentObj);
  }
}
