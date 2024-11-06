import React from 'react';
import { Avatar, Box, Typography, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { styled } from '@mui/material/styles';

const leaderboardData = [
  { rank: 1, avatarUrl: 'https://example.com/avatar1.jpg', name: 'Arna Dutta', Max_Streak: 203, Min_streak: '5 days', score: 6010, badge: '🏆' },
  { rank: 2, avatarUrl: 'https://example.com/avatar2.jpg', name: 'Anuska Biswas', Max_Streak: 129, Min_streak: '4 days', score: 5395, badge: '🏅' },
  { rank: 3, avatarUrl: 'https://example.com/avatar3.jpg', name: 'Saptarshi', Max_Streak: 87, Min_streak: '3 days', score: 4920, badge: '🎖️' },
  {rank: 4, avatarUrl: 'https://example.com/avatar4.jpg', name: 'Chandan', Max_Streak: 82, Min_streak: '2 days', score: 4000, badge: '🎖️' },

];

const DarkBox = styled(Box)({
  backgroundColor: '#121212', 
  color: '#ffffff', 
  padding: '16px',
  borderRadius: '8px',
});

const Leaderboard = () => {
  return (
    <DarkBox sx={{ maxWidth: 1000, margin: 'auto', mt: 4 }}>
      <Typography variant="h2" align="center" gutterBottom sx={{ color: '#ADD8E6', fontWeight: 'bold' }}>
        TrueMix Top Performers
      </Typography>

      {/* Top Performers Section */}
      <Grid container spacing={4} justifyContent="center" sx={{ mb: 4 }}>
        {leaderboardData.slice(0, 3).map((user, index) => (
          <Grid item xs={12} sm={4} key={user.rank}>
            <Paper elevation={3} sx={{ p: 2, textAlign: 'center', backgroundColor: '#333333', color: '#fff' }}>
              <Avatar src={user.avatarUrl} alt={user.name} sx={{ width: 80, height: 80, margin: 'auto' }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 1 }}>
                {user.rank}. {user.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {user.badge}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Table Section */}
      <TableContainer component={Paper} sx={{ backgroundColor: '#333333', color: '#ffffff' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: '#f39c12' }}>Rank</TableCell>
              <TableCell sx={{ color: '#f39c12' }}>Avatar</TableCell>
              <TableCell sx={{ color: '#f39c12' }}>Username</TableCell>
              <TableCell sx={{ color: '#f39c12' }}>Max streak</TableCell>
              <TableCell sx={{ color: '#f39c12' }}>Min Streak</TableCell>
              <TableCell sx={{ color: '#f39c12' }}>Max Score</TableCell>
              <TableCell sx={{ color: '#f39c12' }}>Badge</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leaderboardData.map((user) => (
              <TableRow key={user.rank} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#222222' } }}>
                <TableCell sx={{ color: '#ffffff' }}>{user.rank}</TableCell>
                <TableCell>
                  <Avatar src={user.avatarUrl} alt={user.name} />
                </TableCell>
                <TableCell sx={{ color: '#ffffff' }}>{user.name}</TableCell>
                <TableCell sx={{ color: '#ffffff' }}>{user.Max_Streak}</TableCell>
                <TableCell sx={{ color: '#ffffff' }}>{user.Min_streak}</TableCell>
                <TableCell sx={{ color: '#ffffff' }}>{user.score}</TableCell>
                <TableCell sx={{ color: '#ffffff' }}>{user.badge}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="body2" align="center" sx={{ color: '#999', mt: 2 }}>
        The leaderboard was last updated on: 11/6/2024, 12:38:35 AM
      </Typography>
    </DarkBox>
  );
};

export default Leaderboard;
