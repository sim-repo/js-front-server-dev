
export enum ENDPOINTS {
  OKTELL=0,
  DXBX=1,
  btx=2,
  CRM=3,
  ONE=4,
  NAV=5,
  ISIMPLE=6
}

export class Misc{

  public getEndpointByNumber(idx: any): string{
    switch(idx){
      case 0: return 'OKTELL';
      case 1: return 'DXBX';
      case 2: return 'BTX';
      case 3: return 'CRM';
      case 4: return 'ONE';
      case 5: return 'NAV';
      case 6: return 'ISIMPLE';
    }
    return '';
  }
}
