'use client'
import { useModal } from '@/src/shared/hooks/use-modal'
import { Button } from '@/src/shared/ui/button'

export const Navigation = () => {
  const { onOpen } = useModal()
  return (
    <div className={'flex flex-col gap-4'}>
      <Button onClick={() => { onOpen('popularCard') }}>Мои колоды</Button>
      <Button onClick={() => { onOpen('popularCard') }}>Создать колоду</Button>
    </div>
  )
}
