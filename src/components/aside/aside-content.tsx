import Link from 'next/link'
import { IoLockClosed, IoLockOpen } from 'react-icons/io5'
import { PiVaultFill } from 'react-icons/pi'

import { Separator } from '@/components/ui/separator'

import { Button } from '../ui/button'
import ButtonWithTooltip from '../ui/button-with-tooltip'

interface AsideContentProps {
  collapsed: boolean
}

export function AsideContent(props: AsideContentProps) {
  return (
    <div className={'flex flex-col gap-4'}>
      <Separator />

      <Link href={'/encrypt'}>
        {props.collapsed ? (
          <ButtonWithTooltip
            content={
              <Button>
                <IoLockClosed />
              </Button>
            }
            tooltip={'Encrypt'}
          />
        ) : (
          <Button className={'w-full'}>
            <IoLockClosed />
            Encrypt
          </Button>
        )}
      </Link>

      <Link href={'/decrypt'}>
        {props.collapsed ? (
          <ButtonWithTooltip
            content={
              <Button>
                <IoLockOpen />
              </Button>
            }
            tooltip={'Decrypt'}
          />
        ) : (
          <Button className={'w-full'}>
            <IoLockOpen />
            Decrypt
          </Button>
        )}
      </Link>

      <Link href={'/vault'}>
        {props.collapsed ? (
          <ButtonWithTooltip
            content={
              <Button>
                <PiVaultFill />
              </Button>
            }
            tooltip={'Vault'}
          />
        ) : (
          <Button className={'w-full'}>
            <PiVaultFill />
            Vault
          </Button>
        )}
      </Link>
    </div>
  )
}
