import React, { useEffect, useMemo, useState } from "react"
import Header from "../../components/Header"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { colors } from "../../utils/colors"
import { MaterialReactTable } from "material-react-table"

const MainWrapper = styled.div`
  .MuiPaper-root {
    margin-top: 50px;
  }

  .MuiToolbar-root.MuiToolbar-gutters.MuiToolbar-dense {
    border-radius: 20px;
  }
  [aria-label="Go to previous page"]:before {
    content: "Previous";
    font-size: 12px;
  }
  [aria-label="Go to next page"]:after {
    content: "Next";
    font-size: 12px;
  }

  [aria-label="Show/Hide filters"],
  [aria-label="Show/Hide columns"],
  [aria-label="Toggle density"] {
    display: none;
  }

  .MuiBox-root + .MuiTablePagination-root {
    position: relative;
    top: -54px;
    .MuiInputBase-root:after {
      content: "entries";
      position: absolute;
      left: 52px;
    }

    .MuiTablePagination-spacer,
    .MuiTablePagination-displayedRows,
    .MuiTablePagination-actions {
      display: none;
    }
  }
  .MuiButtonBase-root.MuiIconButton-root {
    &:hover {
      border-radius: 10px;
    }
  }

  .MuiTableContainer-root + .MuiToolbar-root {
    .MuiBox-root {
      .MuiBox-root {
        position: relative;
        width: 100%;

        .MuiTablePagination-root {
          width: 100%;

          .MuiToolbar-root {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
        }
      }
      .MuiTablePagination-spacer,
      .MuiTablePagination-selectLabel,
      .MuiInputBase-root {
        display: none;
      }
    }

    .MuiTablePagination-displayedRows {
      display: inline-block;
      margin-left: -16px;

      &:before {
        content: "Showing";
        margin-right: 6px;
      }
      &:after {
        content: "entries";
        margin-left: 6px;
      }
    }
  }
`
const ButtonHome = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;

  button {
    background: ${colors.lightGreen};
    height: 30px;
    width: 200px;
    border: none;
    border-radius: 10px;
    color: ${colors.black};
    font-weight: bold;
    cursor: pointer;
  }
`
const Error = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 300px;
`

function Employees() {
  const navigate = useNavigate()

  /**
   * Information for the columns of the table
   */
  const columns = useMemo(
    () => [
      {
        accessorKey: "firstName",
        header: "First Name",
        size: 150,
      },
      {
        accessorKey: "lastName",
        header: "Last Name",
        size: 150,
      },
      {
        accessorKey: "startDateTransformed",
        header: "Start Date",
        size: 150,
      },
      {
        accessorKey: "department",
        header: "Department",
        size: 150,
      },
      {
        accessorKey: "birthTransformed",
        header: "Date of Birth",
        size: 50,
      },
      {
        accessorKey: "street",
        header: "Street",
        size: 150,
      },
      {
        accessorKey: "city",
        header: "City",
        size: 150,
      },
      {
        accessorKey: "code",
        header: "State",
        size: 150,
      },
      {
        accessorKey: "zipCode",
        header: "Zip Code",
        size: 150,
      },
    ],
    [],
  )

  /**
   * Get the datas from the localStorage for the table
   */
  const [datas, setDatas] = useState()

  useEffect(() => {
    setDatas(JSON.parse(localStorage.getItem("employees")))
  }, [])

  return (
    <MainWrapper>
      <Header title="Current employees" link="/" textLink="Home" />
      {datas ? (
        <MaterialReactTable
          columns={columns}
          data={datas}
          enableColumnActions={false}
          pagination={{ pageIndex: 0, pageSize: 10 }}
          positionGlobalFilter="right"
          muiTablePaginationProps={{
            rowsPerPageOptions: [10, 25, 50, 100],
            labelRowsPerPage: "Showing",
          }}
          positionPagination="both"
        />
      ) : (
        <Error>No data available</Error>
      )}

      <ButtonHome>
        <button onClick={() => navigate("/")}>Home</button>
      </ButtonHome>
    </MainWrapper>
  )
}

export default Employees
