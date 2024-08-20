import EmptyList from "@/components/home/EmptyList";
import { fetchRentals, deleteRentalAction } from "@/utils/actions";
import Link from "next/link";

import { formatCurrency } from "@/utils/format";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { FormContainer } from "@/components/form/FormContainer";
import { IconButton } from "@/components/form/Buttons";

const RentalsPage = async () => {
  const rentals = await fetchRentals();
  if (rentals.length === 0)
    return (
      <EmptyList
        heading="No rentals to display"
        message="Don't hesitate to create a rental"
      />
    );

  return (
    <div className="mt-16">
      <h4 className="mb-4 capitalize">active properties: {rentals.length}</h4>
      <Table>
        <TableCaption>A list of your active rentals</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Property Name</TableHead>
            <TableHead>Nightly Rate</TableHead>
            <TableHead>Nights Booked</TableHead>
            <TableHead>Total Income</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rentals.map((rental) => {
            const { id: propertyId, name, price } = rental;
            const { totalNightsSum, orderTotalSum } = rental;

            return <TableRow key={propertyId}></TableRow>;
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default RentalsPage;
