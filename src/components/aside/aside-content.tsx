import { IoLockClosed, IoLockOpen } from 'react-icons/io5'
import { PiVaultFill } from 'react-icons/pi'

import { Button } from '../ui/button'
import ButtonWithTooltip from '../ui/button-with-tooltip'

interface AsideContentProps {
  collapsed: boolean
}

export function AsideContent(props: AsideContentProps) {
  return (
    <div className={'flex flex-col gap-4'}>
      {props.collapsed ? (
        <ButtonWithTooltip
          content={
            <Button>
              <IoLockClosed />
            </Button>
          }
          tooltip={'Encrypt'}
          onClick={() => {}}
        />
      ) : (
        <Button>
          <IoLockClosed />
          Encrypt
        </Button>
      )}

      {props.collapsed ? (
        <ButtonWithTooltip
          content={
            <Button>
              <IoLockOpen />
            </Button>
          }
          tooltip={'Decrypt'}
          onClick={() => {}}
        />
      ) : (
        <Button>
          <IoLockOpen />
          Decrypt
        </Button>
      )}

      {props.collapsed ? (
        <ButtonWithTooltip
          content={
            <Button>
              <PiVaultFill />
            </Button>
          }
          tooltip={'Vault'}
          onClick={() => {}}
        />
      ) : (
        <Button>
          <PiVaultFill />
          Vault
        </Button>
      )}
    </div>
  )
}
