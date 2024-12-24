import React from 'react'
import { PanelLeft } from 'lucide-react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import { useSidebar } from './ui/sidebar'

interface SidebarButtonProps {
    className?: string
}

const SidebarButton: React.FC<SidebarButtonProps> = ({ className }) => {
    const toggleSidebar = useSidebar()

    return (
        <button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className={cn(
                "w-10 h-10 rounded-md hover:bg-accent",
                className
            )}
            aria-label="Toggle sidebar"
        >
            <PanelLeft className="h-5 w-5" />
        </button>
    )
}

export default SidebarButton
