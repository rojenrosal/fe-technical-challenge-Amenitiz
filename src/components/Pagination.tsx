
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
}

export function Pagination({ currentPage, totalPages, onPrev, onNext }: PaginationProps) {
  return (
    <div className="flex justify-between items-center mt-6">
      <button
        onClick={onPrev}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-green-400 rounded disabled:opacity-50"
      >
        Previous
      </button>

      <span className="text-sm text-gray-200">
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={onNext}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-green-400 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}