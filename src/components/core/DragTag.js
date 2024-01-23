import { DndContext, PointerSensor, closestCenter, useSensor, useSensors } from '@dnd-kit/core';
import {
    SortableContext,
    arrayMove,
    horizontalListSortingStrategy,
    useSortable,
} from '@dnd-kit/sortable';
import React, { useState } from 'react';
import { Tag } from 'antd';

const DraggableTag = (props) => {
    const { tag } = props;
    const { listeners, setNodeRef, transform, transition, isDragging } = useSortable({
        id: tag.id,
    });
    //   <p key={index * 6} className='text-black-3 text-[14px] leading-[20px] bg-gray-4 rounded-full font-medium px-3 py-2'>{value.addNewSkills}</p>

    const commonStyle = {
        cursor: 'move',
        transition: 'unset', // Prevent element from shaking after drag
        border: "none",
    };
    const style = transform
        ? {
            ...commonStyle,
            transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
            transition: isDragging ? 'unset' : transition, // Improve performance/visual effect when dragging

        }
        : commonStyle;
    return (
        <Tag style={style} ref={setNodeRef} {...listeners}>
            <span className='text-black-3 text-[14px] leading-[20px] bg-gray-7 rounded-full font-medium px-3 py-2'>
                {tag.text}
            </span>
        </Tag>
    );
};
const DragTag = ({ data }) => {
    const [items, setItems] = useState(data);
    const sensors = useSensors(useSensor(PointerSensor));
    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (!over) return;
        if (active.id !== over.id) {
            setItems((data) => {
                const oldIndex = data.findIndex((item) => item.id === active.id);
                const newIndex = data.findIndex((item) => item.id === over.id);
                return arrayMove(data, oldIndex, newIndex);
            });
        }
    };
    return (
        <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCenter}>
            <SortableContext items={items} strategy={horizontalListSortingStrategy}>
                {items.map((item) => (
                    <DraggableTag tag={item} key={item.id} />
                ))}
            </SortableContext>
        </DndContext>
    );
};
export default DragTag;