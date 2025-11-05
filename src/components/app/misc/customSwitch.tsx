import { Switch } from '@/components/ui/switch'

type CustomSwitchProps = {
  state: boolean
  disabled?: boolean
  onChange?: (value: boolean) => void
}

export default function CustomSwitch({
  state,
  disabled = false,
  onChange,
}: CustomSwitchProps) {
  return (
    <Switch
      checked={state}
      disabled={disabled}
      onCheckedChange={onChange}
      className="relative inline-flex h-6 w-10 cursor-pointer rounded-full bg-gray-200 from-green-500 to-teal-500 p-1 transition-colors duration-300 data-[state=checked]:bg-gradient-to-br"
    >
      <span className="pointer-events-none inline-block size-4 transform rounded-full bg-white shadow transition-transform duration-300 data-[state=checked]:translate-x-full" />
    </Switch>
  )
}
