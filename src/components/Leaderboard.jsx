import React from 'react';
import { Avatar, Box, Typography, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { styled } from '@mui/material/styles';
import Nav from '../components/navbar'
import Footer from '../components/Footer'
import L1image from '../assets/images/arna.jpg';
import L2image from '../assets/images/anuska.jpg';
import L3image from '../assets/images/chandu.jpg';
import L4image from '../assets/images/saptarshi.jpg';


const leaderboardData = [
  { rank: 1, avatarUrl: L1image, name: 'Arna Dutta', Max_Streak: 203, Min_streak: '5 days', score: 6010, badge: '🏆' },
  { rank: 2, avatarUrl: L2image, name: 'Anuska Biswas', Max_Streak: 129, Min_streak: '4 days', score: 5395, badge: '🏅' },
  { rank: 3, avatarUrl: L4image, name: 'Saptarshi', Max_Streak: 87, Min_streak: '3 days', score: 4920, badge: '🎖' },
  {rank: 4, avatarUrl: L3image, name: 'Chandan', Max_Streak: 82, Min_streak: '2 days', score: 4000, badge: '🎖' },

];

const DarkBox = styled(Box)({
  backgroundColor: '#00040f', 
  color: '#ffffff', 
  padding: '32px',
  border: '1px solid #c084fc',
  borderRadius: '12px',
});

const Leaderboard = () => {
  return (
    <>
    <Nav/>
    <DarkBox sx={{ maxWidth: 1350, margin: 'auto', mt: 8 }}>
      <h2 className='text-3xl lg:text-6xl  mt-2 py-3 mb-7 font-semibold tracking-tighter bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent  text-center'>
        TrueMix Top Performers
      </h2>

      {/* Top Performers Section */}
      <Grid container spacing={4} justifyContent="center" sx={{ mb: 4 }}>
        {leaderboardData.slice(0, 3).map((user, index) => (
          <Grid item xs={12} sm={4} key={user.rank}>
            <Paper elevation={3} sx={{ p: 2, textAlign: 'center', backgroundColor: '#00040f', color: '#fff' }}>
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
      <TableContainer component={Paper} sx={{ backgroundColor: '#fafafa02', color: '#ffffff' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: '#c084fc' }}>Rank</TableCell>
              <TableCell sx={{ color: '#c084fc' }}>Avatar</TableCell>
              <TableCell sx={{ color: '#c084fc' }}>Username</TableCell>
              <TableCell sx={{ color: '#c084fc' }}>Max streak</TableCell>
              <TableCell sx={{ color: '#c084fc' }}>Min Streak</TableCell>
              <TableCell sx={{ color: '#c084fc' }}>Max Score</TableCell>
              <TableCell sx={{ color: '#c084fc' }}>Badge</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leaderboardData.map((user) => (
              <TableRow key={user.rank} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#00040f' } }}>
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
    <Footer/>
    </>
    
  );
};

export default Leaderboard;