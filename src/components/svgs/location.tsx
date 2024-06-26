import React from 'react'

const Location = React.forwardRef<
  SVGSVGElement,
  React.SVGAttributes<SVGElement>
>((props, ref) => {
  return (
    <svg
      width='6'
      height='8'
      viewBox='0 0 6 8'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      ref={ref}
      {...props}
    >
      <path
        id='Shape'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0 2.89728C0 1.29972 1.34579 0 3 0C4.65419 0 5.99997 1.29972 6 2.89728C6 4.87991 3.31529 7.79053 3.20099 7.91346C3.09382 8.02874 2.90637 8.02895 2.79901 7.91346C2.68471 7.79053 0 4.87991 0 2.89728ZM1.49072 2.89728C1.49072 3.70107 2.16781 4.35499 3.00008 4.35499C3.83234 4.35499 4.50943 3.70108 4.50943 2.8973C4.50943 2.09352 3.83234 1.43959 3.00008 1.43959C2.16782 1.43959 1.49072 2.0935 1.49072 2.89728Z'
        fill='#F89F1E'
      />
    </svg>
  )
})

Location.displayName = 'Location'

export { Location }
