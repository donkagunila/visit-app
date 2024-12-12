import {icons} from "lucide-react";
import React from "react";
import {Variant} from "../../buttons/Button";

export type ActionButton = {
    type: "button" | "link";
    icon?: keyof typeof icons;
    size?: "sm" | "md" | "lg" | "xl";
    label: string;
    variant:
        | "primary"
        | "accent"
        | "secondary"
        | "success"
        | "warning"
        | "pending"
        | "danger"
        | "dark"
        | "info"
        | "outline-primary"
        | "outline-secondary"
        | "outline-success"
        | "outline-warning"
        | "outline-pending"
        | "outline-danger"
        | "outline-dark"
        | "outline-info"
        | "soft-primary"
        | "soft-secondary"
        | "soft-success"
        | "soft-warning"
        | "soft-pending"
        | "soft-danger"
        | "soft-dark"
        | "facebook"
        | "twitter"
        | "instagram"
        | "linkedin";
    onClick: () => void;
};

export interface Props {
    title?: string;
    rows?: any;
    columns: {
        field: any;
        name: string;
        render?: (row: any) => React.ReactElement;
        type?: string;
    }[];
    data?: any[];
    loading?: boolean;
    rounded?: boolean;
    showPagination?: boolean;
    hasSelect?: boolean;
    recordsPerPage?: number;
    secondaryHeaderActions?: ActionButton[] | null;
    dataLoading?: boolean;
    onRowClick?: (row: any) => void;
    onRowSelect?: (row: any) => void;
    pages?: number;
    isRemote?: boolean;
    prevPage?: () => void;
    nextPage?: () => void;
    page?: number;
    flat?: boolean;
    children?: React.ReactNode;
    hideExportButton?: boolean;
    showCreateButton?: boolean;
    onCreateButtonClick?: () => void;
    createButtonLabel?: string;
    createButtonVariant?: Variant
    createButtonIcon?: keyof typeof icons;
}
