import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import clsx from "clsx";
import * as dayjs from "dayjs";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
  Typography,
  makeStyles,
} from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#e1f5fe",
  },
  actions: {
    justifyContent: "flex-end",
  },
}));

const Group = (props) => {
  const { className, groupDisplay } = props;

  const classes = useStyles();

  const { groups } = groupDisplay;

  const issues = groups.map((i) => i.issue);

  return (
    <Card className={clsx(classes.root, className)}>
      <CardHeader
        title={groups.map((defaultGroup) => defaultGroup.title)}
      ></CardHeader>
      <Divider />
      <PerfectScrollbar>
        <Box minWidth={800}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Summary</TableCell>
                <TableCell sortDirection="desc">
                  <Tooltip enterDelay={300} title="Sort">
                    <TableSortLabel active direction="desc">
                      Date
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Severity</TableCell>
                <TableCell>Duration</TableCell>
                <TableCell>Timeline</TableCell>
                <TableCell>Date of Submission</TableCell>
                <TableCell>Assigned To</TableCell>
                <TableCell>Resolved</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {issues.map((issue) => (
                <TableRow hover key={issue.id}>
                  <TableCell></TableCell>
                  <TableCell>
                    {dayjs(issue.createdAt).format("DD/MM/YYYY")}
                  </TableCell>
                  <TableCell>
                    <Chip color="primary" label={issue.status} size="small" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
    </Card>
  );
};

Group.propTypes = {
  className: PropTypes.string,
};

export default connect((state) => state.board)(Group);
