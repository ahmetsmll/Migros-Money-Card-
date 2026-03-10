class MigrosBase{
    indirimOranı= 20;

    constructor(isim , soyisim , kartVarmi , ürünler){
        this.isim=isim;
        this.soyisim=soyisim;
        this.kartVarmi=kartVarmi;
        this.ürünler=ürünler;
    }

    hesapla(){
       let  hesap = 0;
        if(this.checkÜrünVarmi(this.ürünler)){
            if(this.kartVarmi){
                 this.ürünler.forEach(ürün => {
                hesap += ürün.fiyat*(100-this.indirimOranı)/100
            });

            }else{
                 this.ürünler.forEach(ürün => {
                hesap += ürün.fiyat
            });
            }
           
        }else{
            alert("Lütfen sepetinize en az 1 ürün ekleyiniz.")
        }

        return hesap;
    }
    
    checkÜrünVarmi(ürünler){
        if(ürünler.length>0 && ürünler!=null){
            return true;
        }else{
            return false;
        }
        
    }
}