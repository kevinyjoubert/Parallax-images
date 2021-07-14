// reset all element inside page

//     ScrollReveal().reveal(
//         `   .box-center,
//             .box-right,
//             .box-left,
//             #three h2,
//             #three p`,

//         {   reset:true,
//             origin: 'top',
//             distance: '150px',
//             duration: 900,
//             rotate: {
//                 z: 7
//             },
//             scale: 1.5,
//             delay: 500      }
// );


// reset gallery images - left

    ScrollReveal().reveal(
        '   .transition-right',

        {   reset:true,
            origin: 'left',
            distance: '100px',
            duration: 3000,
            delay: 500      }
);


// reset gallery images - right

    ScrollReveal().reveal(
        '   .transition-left',

        {   
            reset:true,
            origin: 'right',
            distance: '100px',
            duration: 3000,
            delay: 500      }
);