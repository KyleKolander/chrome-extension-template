//
// NOTES
// ===============================================================================================================================
// - I almost always want to work with an HTMLElement, so I'm doing the conversion from Element to HTMLElement as a convenience
// - The $ and $$ convenience methods are meant to simulate devtools, but $ will conflict with jQuery - I don't use it, so... FYI.
//

export class Dom
{
    $: (selector: string, parentNode?: ParentNode) => HTMLElement | null = this.select;
    $$: (selector: string, parentNode?: ParentNode) => HTMLElement[] | null = this.selectAll;

    select(selector: string, parentNode?: ParentNode): HTMLElement | null
    {
        if (parentNode == null)
        {
            parentNode = document;
        }

        const el = parentNode.querySelector(selector);
        if (el == null)
        {
            return null;
        }
        return el as HTMLElement;
    }

    selectAll(selector: string, parentNode?: ParentNode): HTMLElement[] | null
    {
        if (parentNode == null)
        {
            parentNode = document;
        }

        const el = parentNode.querySelectorAll<HTMLElement>(selector);
        if (el == null)
        {
            return null;
        }
        return [...el];
    }

    asParentNode(el: HTMLElement | null): ParentNode | undefined
    {
        return el as ParentNode;
    }

    setBackground(el: HTMLElement | null, background: string): void
    {
        if (el != null)
        {
            el.style.background = background;
        }
    }

    setBackgroundAll(elArray: HTMLElement[] | null, background: string): void
    {
        elArray?.forEach(el => this.setBackground(el, background));
    }

    setBorder(el: HTMLElement | null, border: string): void
    {
        if (el != null)
        {
            el.style.border = border;
        }
    }

    setBorderAll(elArray: HTMLElement[] | null, border: string): void
    {
        elArray?.forEach(el => this.setBorder(el, border));
    }

    setBackgroundAndBorder(el: HTMLElement | null, background: string, border: string): void
    {
        this.setBackground(el, background);
        this.setBorder(el, border);
    }

    setBackgroundAndBorderAll(elArray: HTMLElement[] | null, background: string, border: string): void
    {
        elArray?.forEach(el => this.setBackgroundAndBorder(el, background, border));
    }

    setFlex(el: HTMLElement | null)
    {
        if (el != null)
        {
            el.style.display = 'flex';
        }
    }

    setAutoExpand(el: HTMLElement | null)
    {
        if (el != null)
        {
            el.style.flex = '1 1 auto';
        }
    }

    setFlexAndAutoExpand(el: HTMLElement | null)
    {
        this.setFlex(el);
        this.setAutoExpand(el);
    }

    setWidth(el: HTMLElement | null, width: string)
    {
        if (el != null)
        {
            el.style.width = width;
        }
    }

    setTextContent(el: HTMLElement | null, message: string, durationMilliseconds?: number ): HTMLElement | null;
    setTextContent(selector: string, message: string, durationMilliseconds?: number ): HTMLElement | null;
    setTextContent(selector: string, message: string, parentNode?: ParentNode ): HTMLElement | null;
    setTextContent(selector: string, message: string, parentNode?: ParentNode, durationMilliseconds?: number): HTMLElement | null;
    setTextContent(arg1: HTMLElement | null | string, message: string, arg3?: ParentNode | number, arg4?: number): HTMLElement | null
    {
        const durationMilliseconds = typeof arg3 === 'number' ? arg3 as number : arg4;
        const parentNode = typeof arg3 === 'number' ? undefined : arg3;
        const el = typeof arg1 === 'string' ? this.$(arg1, parentNode) : arg1;

        if (el != null)
        {
            el.textContent = message;

            if (durationMilliseconds != null)
            {
                setTimeout(() => { el.textContent = ''; }, durationMilliseconds);
            }
        }

        return el;
    }

    setAttribute(el: HTMLElement | null, name: string, value: string ): HTMLElement | null;
    setAttribute(selector: string, name: string, value: string, parentNode?: ParentNode): HTMLElement | null;
    setAttribute(arg1: HTMLElement | null | string, name: string, value: string, parentNode?: ParentNode): HTMLElement | null
    {
        const el = typeof arg1 === 'string' ? this.$(arg1, parentNode) : arg1;
        el?.setAttribute(name, value);
        return el;
    }
}
