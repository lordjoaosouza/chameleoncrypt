import { RiArrowLeftDoubleFill, RiArrowRightDoubleFill } from 'react-icons/ri'

import ButtonWithTooltip from '../ui/button-with-tooltip'

interface AsideHeaderProps {
  collapsed: boolean
  setCollapsed: (collapsed: boolean) => void
}

export function AsideHeader(props: AsideHeaderProps) {
  return (
    <div className={'flex w-full flex-col gap-4'}>
      <div className={`flex ${props.collapsed ? 'justify-center' : 'justify-end'}`}>
        {props.collapsed ? (
          <ButtonWithTooltip
            content={<RiArrowRightDoubleFill size={24} />}
            tooltip={'Expand'}
            onClick={() => {
              props.setCollapsed(!props.collapsed)
            }}
          />
        ) : (
          <ButtonWithTooltip
            content={<RiArrowLeftDoubleFill size={24} />}
            tooltip={'Collapse'}
            onClick={() => {
              props.setCollapsed(!props.collapsed)
            }}
          />
        )}
      </div>

      {/* <div className={'flex justify-center'}>{props.collapsed ? <p>small</p> : <p>full</p>}</div> */}
    </div>
  )
}
