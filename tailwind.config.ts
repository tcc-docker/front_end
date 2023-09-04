import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
      }
    }
  },
  plugins: [],
  content: ["./src/**/*.{html,js,ts,vue}"],
  safelist: []
}