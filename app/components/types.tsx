export interface AgesListProps {
    list: string[],
}

export interface ButtonCalcProps {
    makeAverage: () => void,
    disabled: boolean,
}

export interface InputAgeProps {
    handleAddAge: (value: string) => void,
}

export interface ModalDataProps {
    visible: boolean,
    average: string,
}

export interface ModalProps {
    data: ModalDataProps,
    toggleModal: (data: ModalDataProps) => void,
    handleCleanAll: () => void,
}