import clsx from 'clsx';
import { Info, AlertTriangle, Lightbulb } from 'lucide-react';

export default function Callout({ type = 'note', children }: { type?: 'note' | 'warning' | 'tip', children: React.ReactNode }) {
    const styles = {
        note: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-900', icon: Info },
        warning: { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-900', icon: AlertTriangle },
        tip: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-900', icon: Lightbulb },
    };

    const style = styles[type];
    const Icon = style.icon;

    return (
        <div className={clsx('p-4 my-6 rounded-lg border flex items-start space-x-3', style.bg, style.border)}>
            <Icon className={clsx('w-5 h-5 mt-0.5 flex-shrink-0', style.text)} />
            <div className={clsx('prose prose-sm max-w-none', style.text)}>
                {children}
            </div>
        </div>
    );
}
