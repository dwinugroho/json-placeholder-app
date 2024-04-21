import React from 'react'

const Email = React.forwardRef<SVGSVGElement, React.SVGAttributes<SVGElement>>(
  (props, ref) => {
    return (
      <svg
        width='11'
        height='8'
        viewBox='0 0 11 8'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        ref={ref}
        {...props}
      >
        <path
          id='email'
          fillRule='evenodd'
          clipRule='evenodd'
          d='M0.966797 0H10.0332C10.1776 0 10.3133 0.0351111 10.4365 0.0940444L6.90072 3.76347L6.89996 3.764L6.89945 3.76478L5.74999 4.95769C5.62787 5.084 5.37217 5.084 5.25005 4.95769L4.10036 3.76458C4.10036 3.76458 4.10031 3.76424 4.10008 3.764L4.09933 3.76347L0.563492 0.0940667C0.686619 0.0351556 0.822422 0 0.966797 0ZM6.2063 5.42838L7.12757 4.47224L10.4365 7.90596C10.3133 7.96489 10.1776 8 10.0332 8H0.966797C0.822422 8 0.686619 7.96484 0.563449 7.90593L3.87239 4.47224L4.7937 5.42838C5.17537 5.82451 5.83271 5.81616 6.2063 5.42838ZM0.102824 0.560267C0.0391016 0.693556 0 0.841511 0 1V7C0 7.15849 0.0390586 7.30644 0.102803 7.43973L3.41748 4.00011L0.102824 0.560267ZM7.58254 4.00011L10.8972 0.560222C10.9609 0.693511 11 0.841467 11 1V7C11 7.15853 10.9609 7.30649 10.8972 7.43978L7.58254 4.00011Z'
          fill='#F89F1E'
        />
      </svg>
    )
  }
)

Email.displayName = 'Email'

export { Email }