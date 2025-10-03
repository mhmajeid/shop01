import React from 'react'

const footer = () => {
  return (
    <>

    <footer className='bg-[#f3f4fb] mt-10'>
      <div className='container mx-auto py-10'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-right'>
          <div className='item-footer'>
            <figure>Logo</figure>
            <p className='mt-4 text-gray-600'>أفضل مكان للتسوق عبر الإنترنت لجميع احتياجاتك. اكتشف منتجاتنا الرائعة اليوم!</p>
            <div className='flex justify-center md:justify-start space-x-4 mt-4'>
              <a href="#" className='text-gray-600 hover:text-gray-800'><img src="./images/icons/facebook.svg" alt="فيسبوك" /></a>
              <a href="#" className='text-gray-600 hover:text-gray-800'><img src="./images/icons/youtube.svg" alt="يوتيوب" /></a>
              <a href="#" className='text-gray-600 hover:text-gray-800'><img src="./images/icons/instagram.svg" alt="إنستغرام" /></a>
              <a href="#" className='text-gray-600 hover:text-gray-800'><img src="./images/icons/linkedin.svg" alt="لينكدإن" /></a>
            </div>
          </div>
          <div className='item-footer'>
            <h3 className='text-lg font-semibold mb-4'>تعرف علينا</h3>
            <ul className='space-y-2'>
              <li><a href="#" className='hover:underline'>من نحن</a></li>
              <li><a href="#" className='hover:underline'>المدونة</a></li>
              <li><a href="#" className='hover:underline'>اتصل بنا</a></li>
            </ul>
          </div>
          <div className='item-footer'>
            <h3 className='text-lg font-semibold mb-4'>خدمات العملاء</h3>
            <ul className='space-y-2'>
              <li><a href="#" className='hover:underline'>سياسة الشحن</a></li>
              <li><a href="#" className='hover:underline'>سياسة الإرجاع</a></li>
              <li><a href="#" className='hover:underline'>الأسئلة الشائعة</a></li>
            </ul>
          </div>
          <div className='item-footer text-center'>
            <h3 className='text-lg font-semibold mb-4'>تحميل التطبيق</h3>
            <ul className='space-y-2'>
              <li><a href="#"><img className="w-32 mx-auto" src="./app-store-badge.png" alt="تحميل من متجر التطبيقات" /></a></li>
              <li><a href="#"><img className="w-32 mx-auto" src="./google-play-badge.png" alt="تحميل من جوجل بلاي" /></a></li>
            </ul>
          </div>
        </div>
        <div className='text-center text-sm text-gray-500 mt-10 border-t border-gray-200 pt-5'>
          &copy; {new Date().getFullYear()} متجرنا. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
      
    </>
  )
}

export default footer
