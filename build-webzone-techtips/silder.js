
$(document).ready(function () {

    // menu
    function addRandomSecondSection() {
        let arrSection = [
            { "img": 'https://blogger.googleusercontent.com/img/a/AVvXsEj-f4mnY2u79yFk2-yceqdBg3QYLma1gYFLeC5wu5EMM7n-pjU7nQSbUO9HmdUFuhX8gkft0vgCpzGqk6U7RwGPKzs-vNmxU9689HvghYjWNciIU7k0KtbJKgNvuF83erJsldYbiIPRoAZxiC9cC2j7fVjdb10tgA-f7OhunCNDJA9Iv0irj78sBCPh=s1175', "url": "https://learn-tech-tips.blogspot.com/2022/02/how-to-display-numbers-as-fraction.html", "title": "On this topic you will learn about how to display numbers as fraction in HTML, javascript" },
            { "img": 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi2T5cjd8RamMDJxUsScchhjX7x4PNRpWA-fDrjA3qFBz6O-Bv7yoatNGaWr8hldQv0kS4n8MjKkwQVsIbWElbz8tNYNJINOrdaz4Yf6OkfbGYPJtdwuP2nvc6m_dEKXCXQRl3JFkJh0hyKMfo-L2Hle7gsAw3NP9x-KPRSFoSDByBy30V8gYgz-0fVgVg/s998/How_to_Bring_Your_CSS_Characters_to_Life_with_a_Walk_Cycle.png', "url": "https://learn-tech-tips.blogspot.com/2023/07/how-to-bring-your-css-characters-to-life-with-a-walk-cycle-animation.html", "title": "Walk Cycle animation is one of tech skills for make css animation" },
            { "img": 'https://1.bp.blogspot.com/-tKjEli2NwvU/Vh99q9A480I/AAAAAAAAB2E/uoZmNXThl8k/s640/bitbuck.png', "url": "https://learn-tech-tips.blogspot.com/2015/10/using-bitbucket-stores-and-manage-sourcecode-with-free-license.html", "title": "This topic will help you how to use bitbucket stored and manage source code effectively" },
            { "img": 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjj59b21tZuxiRe0zyydeKk8WOzW0W-ra2e-GwUL6wnm5RbjbbeyZ664oXOpxzKzLCD9YZ5OOxCj3efgi-tDmkOgI_JWupKNs_n3GOMqHviIb6LskBob0pYoHFCmBYz5-ahex-RefwVaUiYp_xpas5Yi_oig_Fh6gaX26n_KmjRH7ZXj2Z09L2lqD1slF8/s1920/Thumbnail%20Slider%20Login%20Register%20Form%20gif.gif', "url": "https://learn-tech-tips.blogspot.com/2023/06/how-to-build-a-beautiful-slider-login-register-form-in-5-minutes.html", "title": "You will learn a method build a beautiful slider login register form in 5 minutes" },
            { "img": 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgozc3d3_64rmB1Qs3UxZqSXHicVeVEfTlH6CLX8n3E4mRaHzvNZNP1F5ZxJEyJHG1RkgLDuK7YlHlS8aUGp5yaERHWRzONu6VeAsex1l3enAZ3JG75AdziW3oUkn8X5FdQpJfZEIydqbpWfqDwmfVQbR2hY2PaVKdt4IGKVrvlW5QNipdbBLbgM41Z/s16000/server-nestjs-crud-user-2.jpg', "url": "https://learn-tech-tips.blogspot.com/2023/02/full-tutorial-todo-web-app-nextjs-zustand-axios-tailwindcss-react-nestjs-mongoose-jwt-day-3.html", "title": "Full tutorial for build a web app with NextJS, NestJS Zustand state axios management" },
            { "img": 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgIr7jKxgGBhOgF1gQxqSZkN0PERLBsne5wF2Nu15svGtoEUByq-t6t9L8E2s1tN6r4_nVcAZ4oN5qUjebbnaeTJXKkd9yBAzLBVinMvgFm5YuewJr1sRkKPgvk3FsgI8LH3udrCeKv-2hL2VWMoxG1FPbwYfIYUikYtsRlW5pQV8yR0U10L7dKDIwn/s938/zustand.jpg', "url": "https://learn-tech-tips.blogspot.com/2023/01/zustand-simple-modern-state-management-for-react.html", "title": "What is Zustand state, and how to apply to your React Project, This topic will give you details" },
            { "img": 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibo_7J4B5OcvLIzB1pVl3w53coiTn0XxQpkt2tJSn3boEbRnylSGBVaDwEiwxECv8vzEUQkfX8KGMz6SQKTq5qbuKHwF7H-c2DCMPxrThfPbXmfONIhA1QcKleH2mK2l1hqn4FQwAfgVY_RxoLJAcozUMZ4uAjD2xfcq8ePWRTDxUSwKDuGtZNy9NG/s16000/how%20to%20make%20a%20div%20responsive%20background%20image.gif', "url": "https://learn-tech-tips.blogspot.com/2023/01/how-to-make-a-div-background-image-responsive.html", "title": "This topic will make a div background image responsive easily" },
            { "img": 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhv-TlM-AC_nbRXGmjBNpApcX5Q_RA_lqXin9Cb0oHvImrzzNeD7o3WEUOPPFmIOfW0upPWSVPVgyRRx-tsdkQKA1YqnLw2kI3547g1Rak4Y_BC1MSU6U7pdjVwagaGmQuXvnvpngZt2hWxGuTcgy7QfZQ917FsL7LMSb-pC2OxVeZoKtzRHNjsZamX/s1016/Font%20convert%20tools%20-%20how%20to%20add%20local%20font%20to%20Tailwind%20css%20and%20nextjs.png', "url": "https://learn-tech-tips.blogspot.com/2022/11/how-to-add-local-font-to-tailwindcss-and-nextjs.html", "title": "How to add easily local font to TailwindCSS and NextJS" },
            { "img": 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgxNpaxsHGquIPiCCNliaUMWMAotTijVpBgi_VsE3rL34OPM_4pVKcSDdaw-YMU5FlU3yFV3xa2dhNBrrOWLz-xulnpca-P_0ucmeNdk2ZZF4H_ZawenP3lgshQzLE51DRejxASFXGqh1iHvfn1dAyMimOXABX7vCogHlSwqEvGVOkWUq4PT7P02Z1D/s16000/Help%20beautiful%20girls%20change%20clothes.jpg', "url": "https://learn-tech-tips.blogspot.com/2022/07/how-to-help-a-beautiful-girls-change-clothes.html", "title": "Learn How to Dress Up a Gorgeous Girl in Photoshop" },
            { "img": 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYWkVkaLrLTcvTg855_Qfph_1-0OOhJSLhtCmwgEp82lvIzHrDchLdG24ZuTYuXmEdM2tmRPMON8JVA38f338hmM19byHCsgFJ8Qq_VBCBr1Jxcv0bXO3ARVD9Odh10hDLAU35JyKCKKPCIv8GbRIE8F31TnIxZX5lBjfetr83bnBteSElA2XZJ87j/s1084/Adonisjs%20Laravel%20NODEJS%20framework%20-%20How%20to%20fix%20missing%20module%20Core%20env.png', "url": "https://learn-tech-tips.blogspot.com/2022/06/adonicjs-laravel-nodejs-how-to-fix-missing-module.html", "title": "This topic will introduce AdonicJS, one of framework use NodeJS but same with Laravel PHP structure, very easily to use" },
            { "img": 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhtB4SpdPFBcf5PpU4k7BZ4NDMwn48pKBuPyBnq1wA0Lr4v0gY-csnkRygbjLiXZm1L33gwqnVWtr-7qJtL3dwoGIeXNmLY6VRUCDaTiHuUbcb4fmFXdvEeFD9-m9rNO2NO0HQvT0MW2GYBHmKwTPM5hGeljaDHUJ0wKhAWb8p5jOVDt8VT138Y4Brr/s813/girl-sea-1.jpg', "url": "https://learn-tech-tips.blogspot.com/2022/06/how-to-blend-background-photos-with-similar-background.html", "title": "Photoshop skill how to blend background photo with similar background" },
            { "img": 'https://blogger.googleusercontent.com/img/a/AVvXsEiJyKiiNqsYwFWwKJ6e2N8lVWO0rfaefBeeO70hOWybl5iiRLG0XSQjsPjargOW6EaJRPHXzg7709c0EYe4u943YefjpqhZ_G77CuxyzJACHw3AEjpvPnfSdY90iwqyNwt-p0bJ5Xio_3PyV2PWSUqmmSbMpT3veAcHUi_JxFc3rBw-VsWNzer0L5Im=s1760', "url": "https://learn-tech-tips.blogspot.com/2022/02/ilovepdf-tool-work-with-pdf-file.html", "title": "This topic is show you how to easy work with PDF through PDF World" },

            { "img": "https://4.bp.blogspot.com/-2Q-7jUcAK2I/VnzpZF6ESHI/AAAAAAAACJk/YM8TWvLaNjc/s16000/1.png", "url": "https://learn-tech-tips.blogspot.com/2015/12/transparent-form-problem-with-png-c-sharp.html", "title": "CSharp: Solved Transparent Form Problem" },
            { "img": "https://2.bp.blogspot.com/-Tp25jcMTix4/VberlNnA-jI/AAAAAAAABl8/k-2FsNdv4kI/s1600/pivottable.png", "url": "https://learn-tech-tips.blogspot.com/2015/08/using-format-as-table-with-pivot-table.html", "title": "Excel: Form table with Pivot" },
            { "img": "https://3.bp.blogspot.com/-vK7_Ow1HQPQ/VVAPp2hrEkI/AAAAAAAABEg/ZKtuR8RprDw/s16000/remote_desktop_privatekey_0.png", "url": "https://learn-tech-tips.blogspot.com/2015/05/fix-remote-session-was-disconnected-because-liscense-store-creaion-failed-with-access-denied.html", "title": "Solved: Fix remote session was disconnected store creation failed" },
            { "img": "https://2.bp.blogspot.com/-NU9Eh2G2Mfg/V9ZUY2OG_DI/AAAAAAAACug/vUTI9v9_Jdo1ZRyQN-GZOEA-RBq6Y4ScACLcB/s16000/live%2Bhtml.gif", "url": "https://learn-tech-tips.blogspot.com/2016/09/best-ide-tool-for-front-end-developer-brackets.html", "title": "Best IDE Tool - Brackets" },
            { "img": "https://3.bp.blogspot.com/-4-_pxrr5Y-E/WCvS4JQPQbI/AAAAAAAAC00/UFAUgrZTMWYvgyWhQzptGqkiCn2ceza9wCLcB/s16000/manage_nuget_package.png", "url": "https://learn-tech-tips.blogspot.com/2016/11/how-to-extract-tgz-targz-by-sharpcompress-csharp.html", "title": "CSharp: Extract TGZ/TAR/GZ by SharpCompress" },
            { "img": "https://2.bp.blogspot.com/-if2mkcULkJg/V1pwP83BU7I/AAAAAAAACYE/sE0oq2tLUAAz4e5WT_shOUA8RykIPCwLQCLcB/s16000/encoding_2.png", "url": "https://learn-tech-tips.blogspot.com/2016/06/tool-support-check-file-encoding.html", "title": "Useful Tool: Tool Check file Encoding" },
            { "img": "https://ketnoinhau.files.wordpress.com/2015/04/clscustomers.png", "url": "https://learn-tech-tips.blogspot.com/2015/04/php-how-to-use-array-object-class.html", "title": "PHP: Use Array Object Class" },
            { "img": "https://1.bp.blogspot.com/-pP6zWrTPJjI/WGu3qhxOQkI/AAAAAAAAC40/W8bMbaAGtv0BuZX32ry5KQF3Yb-bn6M2gCLcB/s1600/1%2Bsayatoo%2Bkara%2Btitle%2Bmaker.png", "url": "https://learn-tech-tips.blogspot.com/2017/02/how-to-make-karaoke-in-video.html", "title": "Useful Tool: Make Karaoke in video" },
            { "img": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgAGrHbUTQla1gBgKJc2JZIpAZ8p4iarme0gTrdZapnI93qLOgKKbjBSUG8sngdx0FvyP5EY2ChySmImQocRiTpqQSInOLELEp2hu5thusg1KvBfjL5Jt6Hb9nGkFOSG_DnizkvfmB3hFm2PYES7uQ8263KPK6RV-QmfQKQ42qvVYu8DyL-e-cwJPEQ/s16000/handbrake.jpg", "url": "https://learn-tech-tips.blogspot.com/2022/05/solved-camtasia-studio-it-is-either-an-unsupported-media-type-or-required-codecs-are-not-found.html", "title": "Camtasia: Fixed an unsupport media type or required codes" },
            { "img": "https://1.bp.blogspot.com/-Savr9wUt-0U/VTZjNLJTm6I/AAAAAAAAA2k/_t_9szOe1oE/s16000/center%2Ba%2Btable%2Bof%2Bthe%2Bscreen%2B2.jpg", "url": "https://learn-tech-tips.blogspot.com/2015/04/php-how-to-center-table-on-screen.html", "title": "PHP: How to center table on screen" },
            { "img": "https://1.bp.blogspot.com/-ApIiFi0Q3Jo/WuiKxpwqoFI/AAAAAAAADOc/YqhpfNhsgTwQrWHQMISNyY_y001zKlm1wCLcBGAs/s16000/binary_file.jpg", "url": "https://learn-tech-tips.blogspot.com/2018/05/how-to-read-and-write-struct-file-with-C-sharp.html", "title": "Csharp: How to read write struct file" },
            { "img": "https://1.bp.blogspot.com/-sa--WIsPeCg/VwsOfXP57LI/AAAAAAAACRw/n3FXqkAZVDEwvdQp_RgZg-GZqXTb8gOyQ/s320/demo.jpg", "url": "https://learn-tech-tips.blogspot.com/2016/04/getresponsestream-post-get-method-csharp.html", "title": "CSharp: get response stream post get" },
            { "img": "https://1.bp.blogspot.com/-UokBUOCzqSA/VelXGAZV1FI/AAAAAAAAByQ/QOzzDv2hPg8/s16000/datastyle.png", "url": "https://learn-tech-tips.blogspot.com/2015/09/tips-data-conversion-in-c-plus-plus.html", "title": "C++: Data conversion" },
            { "img": "https://4.bp.blogspot.com/-bR1QyHqqZ0M/VXqu0IUKr8I/AAAAAAAABXc/kzqR4rg_kpU/s1600/window%2Bregistry%2B1.png", "url": "https://learn-tech-tips.blogspot.com/2015/06/how-to-read-write-registry-key-by-C-sharp.html", "title": "CSharp: Read write register key" },
            { "img": "https://4.bp.blogspot.com/-_w5U_aPWbac/V3Hz0g_EEoI/AAAAAAAACZQ/uUMf8gkkVVs8HLZeJSksBAzrpCJ4IGQxwCLcB/s16000/dllexp-x64.png", "url": "https://learn-tech-tips.blogspot.com/2016/06/get-exported-function-dll-files-c-plus-plus.html", "title": "C++: Exported function dll files" },
            { "img": "https://1.bp.blogspot.com/-DEU4KViaqGM/VYvL87u-DQI/AAAAAAAABcc/bFI5LKnhcrM/s16000/deleteRegisterKey.png", "url": "https://learn-tech-tips.blogspot.com/2015/06/delete-register-key-in-csharp.html", "title": "CSharp: Delete register key" },
            { "img": "https://2.bp.blogspot.com/-iNSXC3PKS8Q/VlMhUetThcI/AAAAAAAACGw/RM1RfbWbnY4/s1600/glaciallistdll.gif", "url": "https://learn-tech-tips.blogspot.com/2015/11/listview-with-image-c-sharp.html", "title": "CSharp: Listview with image" },
            { "img": "https://2.bp.blogspot.com/-cguPeUdRhjk/VYlZocJWwKI/AAAAAAAABbU/69W21UIeRD4/s1600/Csharp_Excel.png", "url": "https://learn-tech-tips.blogspot.com/2015/06/How-to-read-excel-file-in-c-sharp.html", "title": "Csharp: Read Excel file" },
            { "img": "https://2.bp.blogspot.com/-bcaJVjifPtc/V9ZU1JFR-QI/AAAAAAAACuk/LKqiR1vGBX0tch0Xgx3l53uPoXm-VuEbACLcB/s16000/live%2Bcss.gif", "url": "https://learn-tech-tips.blogspot.com/2016/09/best-ide-tool-for-front-end-developer-brackets.html", "title": "Useful tool: For Frontend Developer" },
        ];

        let randomArray = [];
        for (var i = 0; i < 6; i++) {
            var index = Math.floor(Math.random() * arrSection.length);
            var element = arrSection.splice(index, 1)[0];
            randomArray.push(element);
        }

        let div = "";
        randomArray.forEach((value, index) => {
            return div +=
                "<a target='_blank' href='" + value.url + "' class='flex p-4 justify-left'> <img src="
                + value.img + " style='width: 100px; height: 100px' alt='bg2.jpg' />  <div class='pl-12 description'>" + value.title + "</div> </a>";
        })

        const html = document.querySelector(".second-section");
        html.innerHTML = div;
    }

    // load random import your tech
    $('li.special-menu > div > a').mouseover(function () {  // not use hover, because hover each mouseout, mouseover will trigger
        addRandomSecondSection();
    })



    /* slider */

    // html string:
    // number of words: need to extract
    function extractWordingFromHTMLFormat(htmlString, number) {

        const tempElement = document.createElement('div');
        tempElement.innerHTML = htmlString;
        const plainString = tempElement.innerText;

        // var textString = $(htmlString).text(); // Extract text from HTML string
        var words = plainString.trim().split(" "); // Split text string into words
        var summary = words.slice(0, number).join(" "); // Extract first 50 words and join them
        return summary + " ...";
    }

    function generateSliderData() {

        $.getJSON("https://www.googleapis.com/blogger/v3/blogs/1486059340628392194/posts", {
            key: "AIzaSyDJCLGj19iAjikJaDNFpzWoohnu5JHQVR0",
            fetchImages: true,
            maxResults: 20
        }, function (data) {

            let html = "";
            $.each(data.items, function (index, post) {
                var title = post.title;
                var publishedDate = new Date(post.published);
                var url = post.url;
                var labels = post.labels;
                var description = post.content;
                var thumbnailUrl = post.images ? post.images[0].url : "";

                const dateObj = new Date(publishedDate);

                // Get the year, month, day, day of the week, hours, and minutes from the date object
                const year = dateObj.getFullYear();
                const month = dateObj.getMonth() + 1; // Add 1 to the month because it is zero-indexed
                const day = dateObj.getDate();
                const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][dateObj.getDay()];
                const hours = dateObj.getHours();
                const minutes = dateObj.getMinutes();

                // Construct the final date string in the desired format
                const finalDateString = `${dayOfWeek} ${year}/${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}, ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

                let bgcolor = "bg-[color:var(--orange)]";
                if (index % 2 == 0) {
                    bgcolor = "bg-[color:var(--blue)]";
                }
                // <div class='content bg-[color:var(--orange)] p-4 rounded-lg  text-white'>

                let icon = '<svg fill="#000000" width="30px" height="30px" viewBox="0 0 24 24" id="date-remove" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color"><path id="primary" d="M21,7H3A1,1,0,0,0,2,8V20a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V8A1,1,0,0,0,21,7Z" style="fill: rgb(0, 0, 0);"></path><path id="secondary" d="M22,6V9H2V6A2,2,0,0,1,4,4H20A2,2,0,0,1,22,6Zm-7,9a1,1,0,0,0-1-1H10a1,1,0,0,0,0,2h4A1,1,0,0,0,15,15Z" style="fill: rgb(44, 169, 188);"></path><path id="primary-2" data-name="primary" d="M16,7a1,1,0,0,1-1-1V3a1,1,0,0,1,2,0V6A1,1,0,0,1,16,7ZM9,6V3A1,1,0,0,0,7,3V6A1,1,0,0,0,9,6Z" style="fill: rgb(0, 0, 0);"></path></svg>';

                html += "<div class='item' style='background-image: url(" + thumbnailUrl + "'>";
                html += "   <a class='hover:cursor-pointer' href='" + url.replace('http://', 'https://') + "' target='_blank'>";
                html += `       <div class='content ${bgcolor} p-4 rounded-lg text-white shadow-lg'>`;
                html += "           <div class='flex items-center space-x-4 description'> " + icon + finalDateString + "</div>";
                html += "           <div class='title'>" + title + "</div>";
                html += "           <div class='description'>" + extractWordingFromHTMLFormat(description, 20) + "</div>";
                html += "       </div>";
                html += "   </a>";
                html += "</div>";

            });

            const slider = document.querySelector("#slide");
            slider.innerHTML = html;
        });

    }
    generateSliderData();



    /* add random search */


    // Define an array of messages to be displayed

    const blogId = '1486059340628392194';
    const apiKey = 'AIzaSyDJCLGj19iAjikJaDNFpzWoohnu5JHQVR0';
    const maxResults = 500; // Maximum number of posts to retrieve per API call
    let startIndex = 1;


    // Set up an indexSearch variable to keep track of the current message
    var indexSearch = 0;

    // Set up a timer variable to keep track of the idle time
    var idleTimer = null;
    let randomPosts = [];

    const fetchSearchPosts = async () => {
        const url = `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?fields=items(title,url,images)&key=${apiKey}&maxResults=${maxResults}&startIndex=${startIndex}`;

        const list = ['[Tips]', '[Tutorial]', '[Knowledge]', '[Stored]', '[Solved]', '[PHP]',];
        let messages = [];

        await $.getJSON(url, data => {
            data.items.forEach(post => {

                list.forEach(text => {
                    post.title = post.title.replace(text, '')
                })

                messages.push(post.title.trim())
            });
        });

        randomPosts = await getRandomSubset(messages, 10);
    };

    getRandomSubset = function (array, size) {
        const shuffled = array.slice(0);
        let i = array.length;
        while (i--) {
            const indexSearch = Math.floor((i + 1) * Math.random());
            const temp = shuffled[indexSearch];
            shuffled[indexSearch] = shuffled[i];
            shuffled[i] = temp;
        }
        return shuffled.slice(0, size);
    }

    fetchSearchPosts();


    // Define a function to display the next message
    async function displayNextMessage() {

        // Get the current message from the array
        var message = await randomPosts[indexSearch];

        // Clear the input field
        $('#input-search').val('');

        // Define a function to type the message letter by letter
        function typeMessage(indexSearch) {

            if (message && indexSearch < message.length) {
                var currentText = $('#input-search').val();
                var nextLetter = message.charAt(indexSearch);
                $('#input-search').val(currentText + nextLetter);
                setTimeout(function () {
                    typeMessage(indexSearch + 1);
                }, 100);
            }
        }

        // Call the typeMessage function to display the message
        typeMessage(0);

        // Increment the indexSearch variable and loop back to the beginning of the array if necessary
        indexSearch++;
        if (indexSearch >= randomPosts.length) {
            indexSearch = 0;
        }

        // Reset the idle timer
        resetIdleTimer();
    }

    // Define a function to reset the idle timer
    function resetIdleTimer() {
        // Clear the existing timer
        if (idleTimer !== null) {
            clearTimeout(idleTimer);
        }

        // Set a new timer to resume the message generation after 10 seconds of inactivity
        idleTimer = setTimeout(function () {
            displayNextMessage();
        }, 10000);
    }

    displayNextMessage();

    // Call the resetIdleTimer function to start the idle timer
    resetIdleTimer();

    // Bind an event listener to the input field to pause the message generation when the field is focused
    $('#input-search').on('focus', function () {
        // Clear the existing timer
        if (idleTimer !== null) {
            clearTimeout(idleTimer);
            idleTimer = null;
        }
    });

    // Bind event listeners to the document to detect user activity and reset the idle timer
    //$(document).on('mousemove keydown', function () {
    //	resetIdleTimer();
    //});



    /* big slider */

    let stop = false;
    let timer = setInterval(() => {
        if (!stop) {
            let lists = document.querySelectorAll('.item');
            let slide = document.getElementById('slide');

            if (lists === undefined || lists === null || slide === null || slide === undefined) {
                clearInterval(timer)
                return
            }

            document.getElementById('slide').appendChild(lists[0]);
        } else {
            clearInterval(timer)
        }

    }, 6000)

    let btnNextSlider = document.getElementById('next');
    if (btnNextSlider) {
        btnNextSlider.onclick = function () {
            let lists = document.querySelectorAll('.item');
            document.getElementById('slide').appendChild(lists[0]);
            stop = true;
        }
    }

    let btnPrevSlider = document.getElementById('prev');
    if (btnPrevSlider) {
        btnPrevSlider.onclick = function () {
            let lists = document.querySelectorAll('.item');
            document.getElementById('slide').prepend(lists[lists.length - 1]);
            stop = true;
        }
    }

    // mini tools
    function createSlug(str) {
        str = str.toLowerCase(); // Convert the string to lowercase
        str = str.replace(/\s+/g, '-'); // Replace spaces with hyphens
        str = str.replace(/[^\w\-]+/g, ''); // Remove non-word characters except hyphens
        return str;
    }

    let btnClearSlug = document.getElementById('btnClearSlug');
    btnClearSlug.onclick = function (e) {
        let slugInput = document.getElementById('slugInput');
        slugInput.value = "";
    }

    let btnGeneratorSlug = document.getElementById('btnGeneratorSlug');
    btnGeneratorSlug.onclick = function (e) {

        let slugInput = document.getElementById('slugInput');
        let result = createSlug(slugInput.value)

        let slugOutput = document.getElementById('slugOutput');
        slugOutput.value = result;
    }

    let btnCopyToClipboard = document.getElementById('btnCopyToClipboard');
    btnCopyToClipboard.onclick = function (e) {
        slugInput.select();
        document.execCommand('copy');
        alert('COPY')
    }


    function invertColor(hex) {
        if (hex.indexOf('#') === 0) {
            hex = hex.slice(1);
        }
        // convert 3-digit hex to 6-digits.
        if (hex.length === 3) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        if (hex.length !== 6) {
            throw new Error('Invalid HEX color.');
        }
        // invert color components
        var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
            g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
            b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
        // pad each with zeros and return
        return '#' + padZero(r) + padZero(g) + padZero(b);
    }

    function padZero(str, len) {
        len = len || 2;
        var zeros = new Array(len).join('0');
        return (zeros + str).slice(-len);
    }

    function generateColors() {
        var generatedColors = [];

        let i = 0;
        while (generatedColors.length < 10) {
            var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

            if (!generatedColors.includes(randomColor)) {
                generatedColors.push(randomColor);

                switch (i) {
                    case 0:
                        let color1 = document.getElementById('color1');
                        color1.innerHTML = (randomColor).toUpperCase();
                        color1.style.color = invertColor(randomColor);
                        color1.style.backgroundColor = randomColor;
                        break;

                    case 1:
                        let color2 = document.getElementById('color2');
                        color2.val = (randomColor);
                        color2.innerHTML = (randomColor).toUpperCase();
                        color2.style.color = invertColor(randomColor);
                        color2.style.backgroundColor = randomColor;
                        break;

                    case 2:
                        let color3 = document.getElementById('color3');
                        color3.val = randomColor;
                        color3.innerHTML = (randomColor).toUpperCase();
                        color3.style.color = invertColor(randomColor);
                        color3.style.backgroundColor = randomColor;
                        break;

                    case 3:
                        let color4 = document.getElementById('color4');
                        color4.val = (randomColor);
                        color4.innerHTML = (randomColor).toUpperCase();
                        color4.style.color = invertColor(randomColor);
                        color4.style.backgroundColor = randomColor;
                        break;

                    case 4:
                        let color5 = document.getElementById('color5');
                        color5.val = (randomColor);
                        color5.innerHTML = (randomColor).toUpperCase();
                        color5.style.color = invertColor(randomColor);
                        color5.style.backgroundColor = randomColor;
                        break;

                }

            }
            i++;
        }
        return generatedColors;
    }

    let btn = document.getElementById('btnDiscoverAmazingColors');
    btn.onclick = function () {
        // Usage:
        generateColors();
    };

    generateColors();
    // Get references to the elements
    var colorPicker = document.getElementById('colorPicker');
    var progressBar = document.getElementById('progressBar');

    // Event listener for color change
    colorPicker.addEventListener('input', function () {
        var selectedColor = colorPicker.value;
        progressBar.style.backgroundColor = selectedColor;
    });

})