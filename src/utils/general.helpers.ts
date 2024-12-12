export const slideUp = (
    el: HTMLElement,
    duration = 300,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    callback = () => {
    }
) => {
    el.style.transitionProperty = "height, margin, padding";
    el.style.transitionDuration = duration + "ms";
    el.style.height = el.offsetHeight + "px";
    el.style.overflow = "hidden";
    el.style.height = "0";
    el.style.paddingTop = "0";
    el.style.paddingBottom = "0";
    el.style.marginTop = "0";
    el.style.marginBottom = "0";
    window.setTimeout(() => {
        el.style.display = "none";
        el.style.removeProperty("height");
        el.style.removeProperty("padding-top");
        el.style.removeProperty("padding-bottom");
        el.style.removeProperty("margin-top");
        el.style.removeProperty("margin-bottom");
        el.style.removeProperty("overflow");
        el.style.removeProperty("transition-duration");
        el.style.removeProperty("transition-property");
        callback();
    }, duration);
};


export const slideDown = (
    el: HTMLElement,
    duration = 300,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    callback = () => {
    }
) => {
    el.style.removeProperty("display");
    let display = window.getComputedStyle(el).display;
    if (display === "none") display = "block";
    el.style.display = display;
    const height = el.offsetHeight;
    el.style.overflow = "hidden";
    el.style.height = "0";
    el.style.paddingTop = "0";
    el.style.paddingBottom = "0";
    el.style.marginTop = "0";
    el.style.marginBottom = "0";
    el.style.transitionProperty = "height, margin, padding";
    el.style.transitionDuration = duration + "ms";
    el.style.height = height + "px";
    el.style.removeProperty("padding-top");
    el.style.removeProperty("padding-bottom");
    el.style.removeProperty("margin-top");
    el.style.removeProperty("margin-bottom");
    window.setTimeout(() => {
        el.style.removeProperty("height");
        el.style.removeProperty("overflow");
        el.style.removeProperty("transition-duration");
        el.style.removeProperty("transition-property");
        callback();
    }, duration);
};


export const formatMoney = (amount: any, decimals?: number) => {
    if (!amount) {
        return "";
    }
    return amount.toLocaleString(undefined, {
        minimumFractionDigits: decimals ?? 2
    });
};

export const calculateWeeksPassed = (dateString: string) => {
    const currentDate = new Date();
    const pastDate = new Date(dateString);

    if (isNaN(currentDate.getTime()) || isNaN(pastDate.getTime())) {
        throw new Error("Invalid date string provided.");
    }

    const timeDifference = currentDate.getTime() - pastDate.getTime();
    const weeks = timeDifference / (1000 * 60 * 60 * 24 * 7);
    return Math.floor(weeks);
};

export const calculateTotalValue = (data: any[], property: string) => {
    return data.reduce((total, item) => total + (item[property] || 0), 0);
};

export const calculateTotalQuantity = (data: any[]) => {
    return data.reduce((total, item) => total + item.quantity, 0);
};

export const findHighestAmountItem = (data: any[]) => {
    return data.reduce((maxItem, currentItem) =>
        currentItem.total > maxItem.total ? currentItem : maxItem
    );
};

export const convertToTraysAndEggs = (totalEggs: number) => {
    const eggsPerTray = 30;
    const trays = Math.floor(totalEggs / eggsPerTray);
    const eggs = totalEggs % eggsPerTray;
    return {trays, eggs};
};


export const colors = [
    "#22c55f", // green
    "#f59e0c", // orange
    "#3b82f6", // blue
    "#ec4899", // pink
    "#8b5cf6", // purple
    "#ef4444", // red
    "#14b8a6", // teal
    "#a855f7", // violet
    "#eab308", // yellow
    "#64748b",
]
