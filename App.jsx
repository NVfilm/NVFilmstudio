
import React from 'react';
import { motion } from 'framer-motion';
export default function App(){
  return (
    <div>
      <motion.section initial={{opacity:0}} animate={{opacity:1}} className="hero" style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',textAlign:'center',padding:'20px',background:'linear-gradient(135deg,#000,#222)'}}>
        <div>
          <h1 style={{fontSize:'56px',margin:'0 0 10px',color:'#f5c542'}}>NVStudio</h1>
          <p>Luxury Wedding Films • Reels Editing • Pre Wedding Shoots</p>
          <a href="tel:9310771200" style={{display:'inline-block',marginTop:'20px',padding:'12px 22px',background:'#f5c542',color:'#000',textDecoration:'none',borderRadius:'999px'}}>Call Now</a>
        </div>
      </motion.section>
    </div>
  )
}
