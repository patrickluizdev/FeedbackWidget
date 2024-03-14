import { ChatTeardropDots } from '@phosphor-icons/react'
import { Popover } from '@headlessui/react'
import { WidgetForm } from './WidgetForm'


export function Widget(){
  return (
    <Popover  className='absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end '>
      
      <Popover.Panel>
        <WidgetForm></WidgetForm>
      </Popover.Panel>

      <Popover.Button className='flex items-center bg-brand-primary rounded-full px-3 h-12 hover:bg-brand-hover group transition-all duration-900 outline-brand-hover active:outline-brand-hover'>
        <ChatTeardropDots className='w-6  h-6 text-white'/>
        <span className='text-white max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-700 ease-linear'> 
          <span className='pl-2'></span>
          Feedback 
        </span>
      </Popover.Button>
    </Popover >

  )
}