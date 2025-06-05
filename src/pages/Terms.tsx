
import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 travel-shadow">
          <h1 className="text-4xl font-bold text-primary mb-8 font-tajawal">الشروط والأحكام</h1>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">قبول الشروط</h2>
              <p>
                باستخدام موقع رحلات سولو وخدماتنا، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي من هذه الشروط، يرجى عدم استخدام خدماتنا.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">الحجوزات والدفع</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>جميع الأسعار معروضة بالريال السعودي وتشمل الضرائب المطبقة</li>
                <li>يتطلب تأكيد الحجز دفع مقدم أو الدفع الكامل حسب نوع الباقة</li>
                <li>نحتفظ بالحق في تغيير الأسعار دون إشعار مسبق</li>
                <li>عمليات الدفع آمنة ومحمية بأحدث تقنيات التشفير</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">سياسة الإلغاء والاسترداد</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>الإلغاء قبل 30 يوماً من السفر: استرداد 100%</li>
                <li>الإلغاء قبل 15-29 يوماً من السفر: استرداد 75%</li>
                <li>الإلغاء قبل 7-14 يوماً من السفر: استرداد 50%</li>
                <li>الإلغاء خلال أقل من 7 أيام: لا يوجد استرداد</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">مسؤوليات العميل</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>التأكد من صحة المعلومات المقدمة</li>
                <li>الحصول على التأشيرات والوثائق المطلوبة</li>
                <li>الالتزام بالقوانين المحلية في الوجهات</li>
                <li>التأمين على السفر (مستحسن)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">مسؤولياتنا</h2>
              <p>
                نلتزم بتقديم الخدمات المتفق عليها بأفضل جودة ممكنة. نحن غير مسؤولين عن:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2">
                <li>التأخيرات أو الإلغاءات الناتجة عن الطقس أو الظروف الخارجة عن إرادتنا</li>
                <li>فقدان الأمتعة أو الممتلكات الشخصية</li>
                <li>الحوادث أو الإصابات أثناء الرحلة</li>
                <li>تغييرات في أسعار صرف العملات</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">القانون المطبق</h2>
              <p>
                تخضع هذه الشروط والأحكام لقوانين المملكة العربية السعودية، وأي نزاع ينشأ عنها سيتم حله في المحاكم السعودية المختصة.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">التواصل</h2>
              <p>
                لأي استفسارات حول الشروط والأحكام، يرجى التواصل معنا:
              </p>
              <div className="mt-3">
                <p>البريد الإلكتروني: info@travelsolo.com</p>
                <p>الهاتف: +966 50 123 4567</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;
