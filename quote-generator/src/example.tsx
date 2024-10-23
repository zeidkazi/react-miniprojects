"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Quote {
  text: string
  author: string
}

export default function EnhancedQuoteGenerator() {
  const [quote, setQuote] = useState<Quote | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [copied, setCopied] = useState(false)

  const fetchQuote = async () => {
    setIsLoading(true)
    const response = await fetch("https://api.freeapi.app/api/v1/public/quotes/quote/random")
    const data = await response.json()
    setQuote({ text: data.data.content, author: data.data.author })
    setIsLoading(false)
  }

  useEffect(() => {
    fetchQuote()
  }, [])

  const copyToClipboard = () => {
    if (quote) {
      navigator.clipboard.writeText(`"${quote.text}" - ${quote.author}`)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const cardVariants = {
    initial: { 
      scale: 0.8, 
      opacity: 0, 
      rotateY: 90 
    },
    in: { 
      scale: 1, 
      opacity: 1, 
      rotateY: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
    out: { 
      scale: 0.8, 
      opacity: 0, 
      rotateY: -90,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div 
          key={quote ? quote.text : 'loading'}
          variants={cardVariants}
          initial="initial"
          animate="in"
          exit="out"
          className="w-full max-w-4xl perspective"
        >
          <div className="w-full bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 rounded-3xl overflow-hidden shadow-2xl transform-gpu transition-all duration-500 ease-out hover:shadow-glow">
            <div className="relative p-8 md:p-12 overflow-hidden">  
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>
              
              <div className="relative z-10">
                {isLoading ? (
                  <div className="flex justify-center items-center h-64">
                    <div className="w-16 h-16 border-t-4 border-white border-solid rounded-full animate-spin"></div>
                  </div>
                ) : (
                  <div className="space-y-8">
                    <div className="relative">
                      <svg className="absolute top-0 left-0 w-16 h-16 text-white opacity-20 transform -translate-x-1/2 -translate-y-1/2" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-4xl md:text-5xl text-white font-medium mt-12 mb-8 px-8 leading-relaxed"
                      >
                        {quote?.text}
                      </motion.p>
                      <svg className="absolute bottom-0 right-0 w-16 h-16 text-white opacity-20 transform translate-x-1/2 translate-y-1/2 rotate-180" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                    </div>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.8 }}
                      className="text-right text-white text-xl italic"
                    >
                      - {quote?.author}
                    </motion.p>
                  </div>
                )}
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col md:flex-row justify-between p-8 md:p-12 bg-white bg-opacity-10 backdrop-blur-lg "
            >
              <motion.button
                className="px-8 py-4 bg-white text-purple-600 rounded-full hover:bg-opacity-90 transition-colors duration-200 flex items-center justify-center shadow-lg mb-4 md:mb-0"
                onClick={fetchQuote}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                New Quote
              </motion.button>
              <motion.button
                className="px-8 py-4 bg-purple-600 text-white rounded-full hover:bg-opacity-90 transition-colors duration-200 flex items-center justify-center shadow-lg"
                onClick={copyToClipboard}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {copied ? "Copied!" : "Copy"}
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
    </div>
  )
}