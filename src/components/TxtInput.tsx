import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface TxtInputRootProps {
  children: ReactNode;
}

function TxtInputRoot(props: TxtInputRootProps) {
  return (
    <div className='flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-ciano-300'>
      {props.children}
    </div>
  )
}


export interface TxtInputIconProps {
  children: ReactNode;
}

function TxtInputIcon(porps: TxtInputIconProps) {
  return (
    <Slot className='w-6 h-6 text-gray-400'>
      {porps.children}
    </Slot>
  ) 
}

TxtInputIcon.displayName = 'TxtInputIcon'

export interface TxtInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TxtInputInput(props: TxtInputInputProps) {
  return (
    <input className="bg-transparent outline-none flex-1 text-gray-100 text-xs placeholder:text-gray-400" 
    {...props}/>
    
  )
}

export const TxtInput = {
  Root: TxtInputRoot,
  Input: TxtInputInput,
  Icon: TxtInputIcon,
}