
import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 travel-shadow">
          <h1 className="text-4xl font-bold text-primary mb-8 font-tajawal">سياسة الخصوصية</h1>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">المعلومات التي نجمعها</h2>
              <p>
                نحن في رحلات سولو نحترم خصوصيتك ونلتزم بحماية معلوماتك الشخصية. نقوم بجمع المعلومات التالية:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2">
                <li>المعلومات الشخصية مثل الاسم وعنوان البريد الإلكتروني ورقم الهاتف</li>
                <li>معلومات الحجز وتفضيلات السفر</li>
                <li>معلومات الدفع (يتم معالجتها بشكل آمن)</li>
                <li>بيانات الاستخدام لتحسين خدماتنا</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">كيف نستخدم معلوماتك</h2>
              <p>
                نستخدم المعلومات المجمعة للأغراض التالية:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2">
                <li>معالجة حجوزاتك وتقديم خدمات السفر</li>
                <li>التواصل معك بشأن رحلاتك</li>
                <li>تحسين خدماتنا وموقعنا الإلكتروني</li>
                <li>إرسال العروض والتحديثات (بموافقتك)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">حماية البيانات</h2>
              <p>
                نتخذ إجراءات أمنية صارمة لحماية معلوماتك الشخصية، بما في ذلك التشفير والحماية من الوصول غير المصرح به.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">مشاركة المعلومات</h2>
              <p>
                لا نقوم ببيع أو تأجير معلوماتك الشخصية لأطراف ثالثة. قد نشارك المعلومات فقط:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2">
                <li>مع شركائنا في السفر لإتمام حجوزاتك</li>
                <li>عند الحاجة قانونياً أو لحماية حقوقنا</li>
                <li>مع موافقتك الصريحة</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">حقوقك</h2>
              <p>
                لديك الحق في الوصول إلى معلوماتك الشخصية وتعديلها أو حذفها. يمكنك التواصل معنا في أي وقت لممارسة هذه الحقوق.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">الاتصال بنا</h2>
              <p>
                إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا:
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

export default Privacy;
