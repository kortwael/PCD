import React from 'react';
import ensi from '../../assets/logoo.png'
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css'; // import 'rc-footer/asssets/index.less';
function FooterComp() {
    return (
        <Footer
        columns={[
          
           { 
             
           
           icon: (
            <img style={{width:100, marginRight :'15%'}} src={ensi} />
            
          ),
          theme : 'light',

        },
        
        ]}
        bottom="Made by KORT Wael , JOHMANI Alaeddine , DERBALI Med Dhia"
      />
    );
}

export default FooterComp;