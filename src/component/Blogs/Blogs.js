import React from 'react';

const Blogs = () => {
    return (
        <div className='container mt-5'>
            <h3>Question-01 : What is semantic tag?</h3>
            <p><strong>Answer:</strong> <br />
                <strong>HTML-5</strong> এ সিমান্টিক ট্যাগ গুলো এসেছে। যার দ্বারা ব্রাউজারকে এটা বোঝানো হয় যে কন্টেন্টের ধরন টা কি। যেমন header, nav, section, article, aside footer.
                এগুলো দিয়ে সহজেই বোঝা যায় কোথায় কোন ধরনের ইলিমেন্ট রাখা আছে। আর ব্রাউজার এবং সার্চ ইঞ্জিনও খুব দ্রুত পড়তে পারে কোনটা কোন টাইপের ইলিমেন্ট।</p>

            <h3>Question-2 : Difference among inline, block and inline-block element.</h3>
            <p><strong>Answer:</strong> <br />
                (a) <strong>Inline:</strong> inline element হলো যেসব element তাদের নিজ জায়গা যত টুকূ কেবল ততো টুকুই দখল করে রাখে। যেমন; a, span, input etc tag. <br /><br />

                (b) <strong>Block:</strong> block element হলো যেসব element তার নিজ জায়গা ছাড়াও অবশিষ্ট পুরো জায়গা দখল করে রাখে এবং সেখানে কোনো element কে ঢুকতে দেয় না। যেমন; p, h1-h6, div etc tag.<br /><br />

                (c) <strong> Inline-block:</strong> inline block element হলো inline এবং block element এর কম্বিনেশন।
                অর্থাৎ inline element এর মতো শুধু নিজের জায়গা টুকু নিয়ে থাকবে কিন্তু আচরণ করবে block element এর মতো। block element এর প্রোপার্টি গুলো এখানে ইউজ করা যায়।</p>
        </div>
    );
};

export default Blogs;