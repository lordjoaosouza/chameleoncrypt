import { BiExport, BiImport } from 'react-icons/bi'
import { IoSettings } from 'react-icons/io5'

import { ModeToggle } from '../theme/mode-toggle'
import ButtonWithTooltip from '../ui/button-with-tooltip'
import { Separator } from '../ui/separator'

interface AsideFooterProps {
  collapsed: boolean
}

export function AsideFooter(props: AsideFooterProps) {
  return (
    <div className={'flex h-full w-full flex-col items-center justify-end gap-4'}>
      <ModeToggle />

      <Separator />

      <div className={`flex gap-4 ${props.collapsed ? 'flex-col' : 'flex-row'} `}>
        <ButtonWithTooltip content={<BiImport />} tooltip={'Import Vault'} onClick={() => {}} />
        <ButtonWithTooltip content={<BiExport />} tooltip={'Export Vault'} onClick={() => {}} />
        <ButtonWithTooltip content={<IoSettings />} tooltip={'Settings'} onClick={() => {}} />
      </div>
    </div>
  )
}
