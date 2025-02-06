import { useState } from 'react';
import usePokemonTypes from '../hooks/usePokemonTypes';

interface SearchFormProps {
    onSearch: (searchTerm: string) => void;
    onTypeChange: (type: string) => void;
    initialType?: string;
}

export default function SearchForm({
    onSearch,
    onTypeChange,
    initialType = '',
}: SearchFormProps) {
    const types = usePokemonTypes();
    const [selectedType, setSelectedType] = useState<string>(initialType);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <div className="flex flex-col space-y-4">
            <select
                value={selectedType}
                onChange={(e) => {
                    setSelectedType(e.target.value);
                    onTypeChange(e.target.value);
                }}
                className="p-2 border rounded max-w-xs"
            >
                <option value="">All Types</option>
                {types.map((type) => (
                    <option key={type.name} value={type.name}>
                        {type.name}
                    </option>
                ))}
            </select>
            <div className='max-w-md flex justify-between pb-8'>
                <input
                    type="search"
                    placeholder="Search Pokemon"
                    onChange={(e) => [onSearch(e.target.value), setSearchTerm(e.target.value)]}
                    className="p-2 border rounded w-full"
                />
                <button
                    onClick={handleSearch}
                    className='bg-[#004368] px-4 rounded-md text-white'
                >
                    Search
                </button>
            </div>
        </div>
    );
}