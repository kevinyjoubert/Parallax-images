// reset all element inside page

     ScrollReveal().reveal(
          ` h2,
            p`,

         {   reset:true,
             origin: 'top',
             distance: '150px',
             duration: 900,
             delay: 500      }
 );


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