'use client'

import { motion } from 'framer-motion'

export default function MediaGallery() {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
    >
      <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/c169ce80625385.5ce676e88618e.png" alt="Cyberpunk Scene" className="rounded-xl" />
      <video controls className="rounded-xl">
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
      </video>
      <img src="https://cdna.artstation.com/p/assets/images/images/051/428/308/large/kate-fox-cyberpunk-female.jpg" alt="Augmented Human" className="rounded-xl" />
      <video controls className="rounded-xl">
        <source src="https://samplelib.com/lib/preview/mp4/sample-5s.mp4" type="video/mp4" />
      </video>
    </motion.div>
  )
}
