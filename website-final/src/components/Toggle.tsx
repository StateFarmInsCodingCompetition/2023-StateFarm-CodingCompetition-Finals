import { useState } from 'react';
import { Switch } from '@headlessui/react';
import classNames from '~/utils/classNames';

export default function Toggle({
  id,
  title,
  titleClass = '',
  description,
  className = '',
  value = false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange = () => {},
}: {
  id?: string;
  titleClass?: string;
  title: string;
  description: string;
  className?: string;
  value?: boolean;
  onChange?: (v: boolean) => void;
}): JSX.Element {
  const [enabled, setEnabled] = useState(value);

  return (
    <Switch.Group
      as="div"
      className={`flex ${
        className.includes('justify-') ? '' : 'justify-between gap-2 items-center'
      } ${className}`}
    >
      <span className="flex flex-grow flex-col">
        <Switch.Label
          as="span"
          className={`text-sm font-medium ${titleClass || 'text-gray-900 dark:text-gray-500'}`}
          passive
        >
          {title}
        </Switch.Label>
        <Switch.Description as="span" className="text-sm text-gray-500 mt-1">
          {description}
        </Switch.Description>
      </span>
      <Switch
        checked={enabled}
        onChange={(v) => {
          setEnabled(v);
          onChange(v);
        }}
        className={classNames(
          enabled ? 'bg-blue-600' : 'bg-gray-200',
          'self-center align-middle mt-1 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            enabled ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
          )}
        />
        <input
          className="hidden"
          type="checkbox"
          checked={enabled}
          id={id}
          onChange={(val) => {
            setEnabled(val.target.checked);
            onChange(val.target.checked);
          }}
        />
      </Switch>
    </Switch.Group>
  );
}
