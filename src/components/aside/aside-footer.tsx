import { IoSettings } from 'react-icons/io5'
import { RiArrowLeftDoubleFill, RiArrowRightDoubleFill } from 'react-icons/ri'

import { ModeToggle } from '../theme/mode-toggle'
import ButtonWithTooltip from '../ui/button-with-tooltip'
import { Separator } from '../ui/separator'

interface AsideFooterProps {
  collapsed: boolean
  setCollapsed: (collapsed: boolean) => void
}

export function AsideFooter(props: AsideFooterProps) {
  return (
    <div className={'flex h-full w-full flex-col items-center justify-end gap-4'}>
      <Separator />

      <ModeToggle />

      <Separator />

      <div
        className={`flex gap-4 ${props.collapsed ? 'flex-col' : 'flex-row'} items-center justify-between`}
      >
        <ButtonWithTooltip
          content={<IoSettings size={16} />}
          tooltip={'Settings'}
          onClick={() => {}}
        />

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
      </div>
    </div>
  )
}
