import { type CmsLayoutComponent } from "@remkoj/optimizely-cms-react"
import type CarouselRowLayoutProps from './hero-carousel.row.opti-style.json'
import { extractSettings, type LayoutProps } from "@remkoj/optimizely-cms-react/components"
import dynamic from 'next/dynamic'

const Carousel = dynamic(() => import("./herocarousel"), { ssr: true });

export const HeroCarouselRow : CmsLayoutComponent<LayoutProps<typeof CarouselRowLayoutProps>> = ({ layoutProps, contentLink, children }) => {
    const {} = extractSettings(layoutProps)
    // Count the number of items
    const itemCount = Array.isArray(children) ? children.length : 1

    // Wrap items, if possible
    const items = Array.isArray(children) ? children.map((child, idx) => {
        return <div key={ idx }>{ child }</div>
    }) : children
    return <Carousel itemCount={ itemCount }>{ items }</Carousel>
}

export default HeroCarouselRow