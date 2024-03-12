import { ReactElement, useEffect, useState } from 'react'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip'

interface ButtonWithTooltipProps {
  content: ReactElement
  tooltip: string
  onClick: () => void
}

export default function ButtonWithTooltip(props: ButtonWithTooltipProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <button onClick={props.onClick} className={'flex'}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>{props.content}</TooltipTrigger>
          <TooltipContent side={'right'}>
            <p>{props.tooltip}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </button>
  )
}
