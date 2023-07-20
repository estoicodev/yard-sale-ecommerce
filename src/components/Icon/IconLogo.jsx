import PropTypes from 'prop-types'

function IconLogo({ fill, sizeType }) {
  const sizes = {
    sm: "w-[97px] h-[20px] sm:w-[117px] sm:h-[25px] lg:w-[127px] lg:h-[30px]",
    lg: "w-[127px] h-[30px] sm:w-[147px] sm:h-[50px] lg:w-[167px] lg:h-[70px]",
  }
  return (
    <svg className={`${sizes[sizeType]}`} viewBox="0 0 97 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M4.42306 9.28934V16.3575C4.42306 16.7124 4.1304 17 3.76917 17H1.1539C0.79266 17 0.5 16.7124 0.5 16.3575V3.50635C0.5 3.24017 0.666966 3.00161 0.919925 2.90646C0.919925 2.90646 6.60805 0.764126 8.29795 0.127689C8.74989 -0.0425628 9.25 -0.0425628 9.70194 0.127689C11.3918 0.764126 17.0801 2.90646 17.0801 2.90646C17.417 3.03337 17.5857 3.40518 17.4566 3.73628C17.3274 4.06753 16.9491 4.23331 16.6122 4.10639C16.6122 4.10639 10.9239 1.96406 9.23399 1.32762C9.08335 1.27087 8.9167 1.27087 8.76605 1.32762L1.80764 3.94832V15.7149H3.11543V6.07662C3.11543 5.72177 3.40809 5.43401 3.76917 5.43401H14.2307C14.5918 5.43401 14.8846 5.72177 14.8846 6.07662V15.7149H16.1923V6.07662C16.1923 5.72193 16.4852 5.43401 16.8461 5.43401C17.2069 5.43401 17.4999 5.72193 17.4999 6.07662V16.3575C17.4999 16.7124 17.2072 17 16.8461 17H14.2307C13.8696 17 13.5768 16.7124 13.5768 16.3575V9.28934H4.42306ZM13.5768 8.00428V6.71922H4.42306V8.00428H13.5768Z" fill="black"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M48.1 15.745C47.99 15.875 47.85 15.9575 47.68 15.9925C47.51 16.0275 47.34 16.0275 47.17 15.9925C47 15.9575 46.86 15.91 46.75 15.85C46.58 15.75 46.41 15.6025 46.24 15.4075C46.07 15.2125 45.9325 14.95 45.8275 14.62C45.7225 14.29 45.67 13.865 45.67 13.345C45.67 13.175 45.64 13.0175 45.58 12.8725C45.52 12.7275 45.435 12.6025 45.325 12.4975C45.215 12.3925 45.075 12.3125 44.905 12.2575L44.7719 12.2214C44.6331 12.1905 44.4775 12.175 44.305 12.175L41.5 12.176V15.085C41.5 15.345 41.43 15.5625 41.29 15.7375C41.15 15.9125 40.955 16 40.705 16C40.425 16 40.175 15.9125 39.955 15.7375C39.735 15.5625 39.625 15.345 39.625 15.085V6.415C39.625 6.155 39.7125 5.9375 39.8875 5.7625C40.0625 5.5875 40.28 5.5 40.54 5.5H44.86C45.38 5.5 45.8675 5.6375 46.3225 5.9125C46.7775 6.1875 47.145 6.5675 47.425 7.0525C47.705 7.5375 47.845 8.095 47.845 8.725C47.845 9.105 47.7675 9.475 47.6125 9.835C47.4575 10.195 47.2475 10.52 46.9825 10.81L46.8196 10.9762C46.7084 11.0818 46.592 11.177 46.4704 11.2618L46.389 11.315L46.4182 11.3332C46.5634 11.4364 46.6915 11.5495 46.8025 11.6725C46.9875 11.8775 47.1325 12.0975 47.2375 12.3325C47.3425 12.5675 47.405 12.82 47.425 13.09C47.465 13.34 47.4925 13.56 47.5075 13.75C47.5225 13.94 47.5525 14.1 47.5975 14.23C47.6425 14.36 47.73 14.46 47.86 14.53C48.08 14.66 48.2175 14.8475 48.2725 15.0925C48.3275 15.3375 48.27 15.555 48.1 15.745ZM44.785 7.225H41.5V10.63H44.785C44.965 10.63 45.14 10.5475 45.31 10.3825C45.48 10.2175 45.62 9.9925 45.73 9.7075C45.84 9.4225 45.895 9.11 45.895 8.77C45.895 8.33 45.7775 7.9625 45.5425 7.6675C45.3075 7.3725 45.055 7.225 44.785 7.225ZM54.43 16C55.4 16 56.2175 15.765 56.8825 15.295C57.5475 14.825 58.055 14.1925 58.405 13.3975C58.755 12.6025 58.93 11.72 58.93 10.75C58.93 10.03 58.8325 9.3525 58.6375 8.7175C58.4425 8.0825 58.1525 7.5225 57.7675 7.0375C57.3825 6.5525 56.91 6.175 56.35 5.905C55.79 5.635 55.15 5.5 54.43 5.5H50.845C50.585 5.5 50.3675 5.5875 50.1925 5.7625C50.0175 5.9375 49.93 6.155 49.93 6.415V15.085C49.93 15.345 50.0175 15.5625 50.1925 15.7375C50.3675 15.9125 50.585 16 50.845 16H54.43ZM54.28 7.225H51.805V14.275H54.28C54.91 14.275 55.425 14.1125 55.825 13.7875C56.225 13.4625 56.5175 13.0325 56.7025 12.4975C56.8875 11.9625 56.98 11.38 56.98 10.75C56.98 10.28 56.9275 9.8325 56.8225 9.4075C56.7175 8.9825 56.555 8.6075 56.335 8.2825C56.115 7.9575 55.835 7.7 55.495 7.51C55.155 7.32 54.75 7.225 54.28 7.225Z" fill={fill}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M85.86 15.72C85.6733 15.9067 85.4413 16 85.164 16C84.8973 16 84.6733 15.9067 84.492 15.72C84.3107 15.5333 84.22 15.3013 84.22 15.024V5.136C84.22 4.85867 84.3133 4.62667 84.5 4.44C84.6867 4.25333 84.9187 4.16 85.196 4.16C85.4733 4.16 85.7 4.25333 85.876 4.44C86.052 4.62667 86.14 4.85867 86.14 5.136V15.024C86.14 15.3013 86.0467 15.5333 85.86 15.72ZM70.324 15.76C69.7 16.0267 69.0253 16.16 68.3 16.16C67.5533 16.16 66.8813 16.0667 66.284 15.88C65.6867 15.6933 65.116 15.3653 64.572 14.896C64.4333 14.7787 64.3267 14.6453 64.252 14.496C64.1773 14.3467 64.14 14.1973 64.14 14.048C64.14 13.8027 64.228 13.5867 64.404 13.4C64.58 13.2133 64.8013 13.12 65.068 13.12C65.2707 13.12 65.452 13.184 65.612 13.312C66.0173 13.6427 66.42 13.8933 66.82 14.064C67.22 14.2347 67.7133 14.32 68.3 14.32C68.6947 14.32 69.0573 14.2587 69.388 14.136C69.7187 14.0133 69.9853 13.848 70.188 13.64C70.3907 13.432 70.492 13.1947 70.492 12.928C70.492 12.608 70.396 12.336 70.204 12.112C70.012 11.888 69.7187 11.6987 69.324 11.544C68.9293 11.3893 68.428 11.2693 67.82 11.184C67.244 11.0987 66.7373 10.968 66.3 10.792C65.8627 10.616 65.4973 10.392 65.204 10.12C64.9107 9.848 64.6893 9.528 64.54 9.16C64.3907 8.792 64.316 8.37867 64.316 7.92C64.316 7.22667 64.4947 6.63467 64.852 6.144C65.2093 5.65333 65.692 5.28 66.3 5.024C66.908 4.768 67.58 4.64 68.316 4.64C69.0093 4.64 69.652 4.744 70.244 4.952C70.836 5.16 71.3187 5.424 71.692 5.744C72.0013 5.98933 72.156 6.272 72.156 6.592C72.156 6.82667 72.0653 7.04 71.884 7.232C71.7027 7.424 71.4893 7.52 71.244 7.52C71.084 7.52 70.94 7.472 70.812 7.376C70.6413 7.22667 70.412 7.08533 70.124 6.952C69.836 6.81867 69.532 6.70667 69.212 6.616C68.892 6.52533 68.5933 6.48 68.316 6.48C67.8573 6.48 67.4707 6.53867 67.156 6.656C66.8413 6.77333 66.604 6.93333 66.444 7.136C66.284 7.33867 66.204 7.57333 66.204 7.84C66.204 8.16 66.2973 8.424 66.484 8.632C66.6707 8.84 66.94 9.00533 67.292 9.128C67.644 9.25067 68.0653 9.36 68.556 9.456C69.196 9.57333 69.7587 9.712 70.244 9.872C70.7293 10.032 71.132 10.2373 71.452 10.488C71.772 10.7387 72.012 11.0533 72.172 11.432C72.332 11.8107 72.412 12.272 72.412 12.816C72.412 13.5093 72.22 14.1067 71.836 14.608C71.452 15.1093 70.948 15.4933 70.324 15.76ZM78.676 15.96C78.3293 16.0933 77.9533 16.16 77.548 16.16C76.812 16.16 76.1453 15.9707 75.548 15.592C74.9507 15.2133 74.4787 14.6907 74.132 14.024C73.7853 13.3573 73.612 12.592 73.612 11.728C73.612 10.8533 73.7853 10.0827 74.132 9.416C74.4787 8.74933 74.9453 8.22667 75.532 7.848C76.1187 7.46933 76.7693 7.28 77.484 7.28C77.9427 7.28 78.364 7.34933 78.748 7.488C79.132 7.62667 79.4653 7.80267 79.748 8.016L79.9099 8.14432C79.9613 8.1872 80.0114 8.23176 80.06 8.278V8.256C80.06 7.97867 80.1507 7.74667 80.332 7.56C80.5133 7.37333 80.7427 7.28 81.02 7.28C81.2973 7.28 81.5267 7.37067 81.708 7.552C81.8893 7.73333 81.98 7.968 81.98 8.256V15.024C81.98 15.3013 81.8893 15.5333 81.708 15.72C81.5267 15.9067 81.2973 16 81.02 16C80.7427 16 80.5133 15.9067 80.332 15.72L80.2489 15.6229C80.1482 15.4884 80.0877 15.3337 80.0676 15.1589L80.061 15.04L79.9832 15.1235C79.868 15.2406 79.7336 15.3568 79.58 15.472C79.324 15.664 79.0227 15.8267 78.676 15.96ZM77.788 14.4C77.3293 14.4 76.924 14.2827 76.572 14.048C76.22 13.8133 75.9453 13.4933 75.748 13.088C75.5507 12.6827 75.452 12.2293 75.452 11.728C75.452 11.216 75.5507 10.7573 75.748 10.352C75.9453 9.94667 76.22 9.62667 76.572 9.392C76.924 9.15733 77.3293 9.04 77.788 9.04C78.2573 9.04 78.668 9.15733 79.02 9.392C79.372 9.62667 79.6467 9.94667 79.844 10.352C80.0413 10.7573 80.14 11.216 80.14 11.728C80.14 12.2293 80.0413 12.6827 79.844 13.088C79.6467 13.4933 79.372 13.8133 79.02 14.048C78.668 14.2827 78.2573 14.4 77.788 14.4ZM92.332 16.16C92.8653 16.16 93.3827 16.072 93.884 15.896C94.3853 15.72 94.7747 15.5147 95.052 15.28C95.3507 15.0453 95.5 14.784 95.5 14.496C95.5 14.2827 95.4227 14.096 95.268 13.936C95.1133 13.776 94.9187 13.696 94.684 13.696C94.5133 13.696 94.332 13.744 94.14 13.84C94.0227 13.904 93.892 13.9813 93.748 14.072C93.604 14.1627 93.4147 14.24 93.18 14.304C92.9453 14.368 92.6307 14.4 92.236 14.4C91.8093 14.4 91.4067 14.296 91.028 14.088C90.6493 13.88 90.34 13.576 90.1 13.176C89.9629 12.9474 89.8649 12.6901 89.8061 12.4041L89.802 12.384H95.084C95.2888 12.384 95.4731 12.3328 95.637 12.2304L95.756 12.144C95.948 11.984 96.0493 11.776 96.06 11.52C96.06 10.944 95.9507 10.4 95.732 9.888C95.5133 9.376 95.2173 8.92533 94.844 8.536C94.4707 8.14667 94.0413 7.84 93.556 7.616C93.0707 7.392 92.556 7.28 92.012 7.28C91.308 7.28 90.6413 7.46133 90.012 7.824C89.3827 8.18667 88.8733 8.70667 88.484 9.384C88.0947 10.0613 87.9 10.88 87.9 11.84C87.9 12.6613 88.0787 13.3973 88.436 14.048C88.7933 14.6987 89.3053 15.2133 89.972 15.592C90.6387 15.9707 91.4253 16.16 92.332 16.16ZM89.819 10.784H94.012V10.672C93.9907 10.3627 93.8813 10.0853 93.684 9.84C93.4867 9.59467 93.2413 9.4 92.948 9.256C92.6547 9.112 92.3427 9.04 92.012 9.04C91.692 9.04 91.3933 9.08267 91.116 9.168C90.8387 9.25333 90.5987 9.39733 90.396 9.6C90.1933 9.80267 90.0333 10.0747 89.916 10.416L89.8622 10.5942L89.819 10.784Z" fill="black"/>
      <path d="M24.545 16C24.775 16 24.9775 15.9125 25.1525 15.7375C25.3275 15.5625 25.415 15.345 25.415 15.085V11.429L28.55 6.94C28.59 6.88 28.6222 6.81889 28.6467 6.75667L28.6775 6.6625C28.7025 6.5675 28.715 6.475 28.715 6.385C28.715 6.115 28.6225 5.8925 28.4375 5.7175C28.2525 5.5425 28.045 5.455 27.815 5.455C27.525 5.455 27.275 5.605 27.065 5.905L24.592 9.523L21.95 5.875C21.77 5.635 21.5643 5.49786 21.3329 5.46357L21.215 5.455C20.995 5.455 20.78 5.54 20.57 5.71C20.36 5.88 20.255 6.1 20.255 6.37C20.255 6.47 20.275 6.58 20.315 6.7C20.355 6.82 20.425 6.945 20.525 7.075L23.645 11.222V15.085C23.645 15.3017 23.7058 15.4888 23.8273 15.6465L23.9075 15.7375C24.0825 15.9125 24.295 16 24.545 16Z" fill={fill}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M37.5874 15.835C37.4124 15.995 37.2199 16.075 37.0099 16.075C36.8299 16.075 36.6674 16.02 36.5224 15.91L36.4198 15.82C36.3232 15.7225 36.2449 15.6025 36.1849 15.46L35.4059 13.645H30.9329L30.1549 15.475C30.0849 15.665 29.9774 15.8125 29.8324 15.9175C29.6874 16.0225 29.5299 16.075 29.3599 16.075C29.0899 16.075 28.8899 16 28.7599 15.85C28.6299 15.7 28.5649 15.515 28.5649 15.295C28.5649 15.205 28.5799 15.11 28.6099 15.01L32.3449 6.04C32.4249 5.84 32.5474 5.685 32.7124 5.575C32.8774 5.465 33.0549 5.42 33.2449 5.44C33.4249 5.44 33.5924 5.4925 33.7474 5.5975C33.9024 5.7025 34.0149 5.85 34.0849 6.04L37.7749 14.83C37.8249 14.96 37.8499 15.08 37.8499 15.19C37.8499 15.46 37.7624 15.675 37.5874 15.835ZM31.6669 11.92H34.6659L33.1589 8.409L31.6669 11.92Z" fill={fill}/>
    </svg>
  )
}

IconLogo.propTypes = {
  fill: PropTypes.string,
  sizeType: PropTypes.string,
}

export default IconLogo