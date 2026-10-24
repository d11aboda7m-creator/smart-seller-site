// إعدادات صفحة البيع. عدّلها ثم ارفع مجلد sales/ على أي استضافة ثابتة.
// عبّي واحد من الاثنين فقط:
//   paypalMe: الأسهل. اسمك في paypal.me (من paypal.com/paypalme) والصفحة تبني رابط 89 USD تلقائياً.
//   paypalLink: رابط دفع من حساب PayPal التجاري (Payment Links and Buttons) إذا عندك واحد.
// لا تضع هنا أي مفتاح سري أو Client Secret؛ الرابط وحده يكفي.
window.SALES = {
  paypalMe: 'wiseguidance',            // مثال: 'yourname' يصير https://paypal.me/yourname/89USD
  paypalLink: '',          // مثال: 'https://www.paypal.com/ncp/payment/XXXXXXXX'
  price: 89,
  currency: 'USD',
  deliveryHours: 24,       // خلال كم ساعة ترسل النسخة بعد ما تتأكد من الدفع
  contactEmail: 'abdlrhmnaab@gmail.com',        // إيميلك لاستلام الطلبات والأسئلة
  contactWhatsapp: ''      // رقمك بصيغة دولية بدون + (اختياري)، مثال: '9665XXXXXXXX'
};
