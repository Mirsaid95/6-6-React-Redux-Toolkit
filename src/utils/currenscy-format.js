const formatter = (price) =>
    new Intl.NumberFormat("ru", {
        style: "decimal",
    }).format(price || 0);

export default formatter;

//  formatter funcsiasi sonlarni xar xil davlatni sum tiliga ogirib beradi va ular 
//Quyida ba'zi asosiy tillar uchun kodlar keltirilgan:

// "en-US" – Ingliz (Amerika) formati
// "en-GB" – Ingliz (Buyuk Britaniya) formati
// "de-DE" – Nemis formati
// "fr-FR" – Fransuz formati
// "ja-JP" – Yapon formati
// "zh-CN" – Xitoy formati