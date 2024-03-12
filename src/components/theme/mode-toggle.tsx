import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import * as React from 'react'

import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size='icon'>
          <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
          <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='center' side={'right'} className={'border border-primary'}>
        <DropdownMenuItem className={'gap-2'} onClick={() => setTheme('light')}>
          <Sun size={'16'} /> Light
        </DropdownMenuItem>
        <DropdownMenuItem className={'gap-2'} onClick={() => setTheme('dark')}>
          <Moon size={'16'} /> Dark
        </DropdownMenuItem>
        <DropdownMenuItem className={'gap-2'} onClick={() => setTheme('system')}>
          <Monitor size={'16'} />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
