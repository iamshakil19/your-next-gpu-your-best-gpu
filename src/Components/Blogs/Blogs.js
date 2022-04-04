import React from 'react';
const Blogs = () => {
    return (
        <section>
            <div className='mb-10'>
                <h2 className='font-bold text-2xl text-center'>What Is Context Api</h2>
                <p className='mx- mt-5 text-center text-lg'>আগে যখন প্যারেন্ট কম্পোনেন্ট থেকে কোন ডাটা নিচের কোন কম্পোনেন্ট কে পাঠানো লাগতো
                    <br /> তখন প্রতিটা কম্পোনেন্টের ভিতর দিয়ে props আকারে পাঠাতে হতো। যেটাকে রিয়্যাক্টের ভাষায় Props Drilling বলে।
                    <br /> তবে Context Api দিয়ে সেটা সহজেই Props Drilling ছাড়া করে ফেলা যায়।</p>
            </div>
            <div className='mb-10'>
                <h2 className='font-bold text-2xl text-center'>What Is Semantic Tag</h2>
                <p className='mx- mt-5 text-center text-lg'>সিমেন্টিক ট্যাগ বলতে আমি যা বুঝি সেটা হলো কোন ট্যাগের নাম শুনে বুঝতে পারা <br /> যে এটার কাজ কি বা কি Means করছে। 
html 5 এর কিছু সিমেন্টিক ট্যাগের নাম হলো : form, table, img etc</p>
            </div>
            <div className='mb-10'>
                <h2 className='font-bold text-2xl text-center'>Difference between inline and inline block elements</h2>
                <p className='mx- mt-5 text-center text-lg'>Inline এলিমেন্ট তার যত টুকো জায়গা দরকার সে শুধু ততটুকুই নিবে এবং পাশের জায়গায় ও ছেড়ে দিবে।
                    <br />
                    Inline Elements: img, a, br, button, small, span, strong etc.
                    <br />
                    আর অন্যদিকে Block এলিমেন্ট পুরোপুরি উল্টো। সে প্রতিবারে নতুন নতুন লাইন Create করে এবং পুরো Width নিয়ে নেয়।
                    <br />
                    Block Elements: div, section, ul, ol, nav, p etc.</p>
            </div>
        </section>
    );
};

export default Blogs;